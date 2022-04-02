/** @format */
import { IIMPState } from '../interfaces/IIMPState'
import { IIMPAction } from '../interfaces/IIMPAction'
import { IIMPProduct } from '../interfaces/IIMPProduct'
import { reducerCleanup } from './cleanup/reducerCleanup'
import { determinePrimitiveParent } from './helpers/determinePrimitiveParent'
import { filterSearchResults } from './helpers/filterSearchResults'
import { generateDefaultState } from './helpers/generateDefaultState'
import { undo } from './history/undo'
import { redo } from './history/redo'
import { refreshCartStatus } from './cleanup/refreshCartStatus'
/**
 * Updates application state based on the passed action
 * all business logic lives in this file or in a function this file imports
 * @param state the current application state
 * @param action the action to process
 * @returns the new application state
 */
export const ImpReducer = (state: IIMPState, action: IIMPAction): IIMPState => {
  let newState: IIMPState = { ...state }
  let isInRange: boolean
  let isLessThanMax: boolean
  let isLessThanOnHand: boolean
  let isMoreThanMin: boolean
  let primitiveParent: number
  let parentProduct: IIMPProduct
  switch (action.type) {
    case `CHANGE_LOGIN`: // when clicking login or logout buttons
      newState.loggedInUser = action.payload
      newState.contentAreaView = action.payload
      return reducerCleanup(newState)
    case `PURCHASE_CART`: // when clicking the purchase cart button
      // TODO: should remove the products in the cart from inventory
      return reducerCleanup(newState)
    case `APPLICATION_START`: // at launch
      // TODO: should get inventory from SQL database with howsEverything function
      return reducerCleanup(generateDefaultState())
    case `USE_NAV_BAR`: // when clicking navigation buttons
      newState = {
        ...newState,
        contentAreaView: action.payload
      }
      return reducerCleanup(newState)
    case `REFRESH_DATABASE`: // when pulling data from the database
      // TODO: should query the database with howsEverything function
      return reducerCleanup(newState)
    case `UPDATE_DATABASE`: // when pushing data to the database
      // TODO: should change the database with holdThis function
      return reducerCleanup(newState)
    case `UNDO`: // when clicking the undo button
      return undo(newState, state)
    case `REDO`: // when clicking the redo button
      return redo(newState, state)
    case `CREATE_INVENTORY_ENTRY`: // when clicking receive item button
      let newProduct: IIMPProduct
      // see if product is already in inventory
      let productFromInventory: IIMPProduct | undefined = newState.currentInventory.find((product) => product.upc === action.payload.upc)
      if (productFromInventory) {
        // if product is in inventory, add to quantity in inventory
        newProduct = {
          ...productFromInventory,
          quantityInInventory: {
            ...productFromInventory.quantityInInventory,
            currentValue: productFromInventory.quantityInInventory.currentValue + action.payload.quantityToReceive.currentValue
          }
        }
        // replace the old product with the new product
        newState.currentInventory = newState.currentInventory.map((product) => {
          if (product.upc.currentValue === action.payload.upc.currentValue) {
            return newProduct
          }
          return product
        })
      } else {
        // if product is not in inventory, submit action.payload to currentInventory
        newState.currentInventory.push(action.payload)
      }
      newState.currentInventory.push(action.payload)
      // TODO: update currentInventory in SQL database with holdThis function
      return reducerCleanup(newState)
    case `DELETE_INVENTORY_ENTRY`: // when clicking delete item button
      // TODO: delete item from SQL database using forgetIt function
      return reducerCleanup(newState)
    case `UPDATE_INVENTORY`: // when clicking a submit update button in the inventory control menu
      let updatedProduct: IIMPProduct | undefined = newState.currentInventory.find((product) => product.upc.currentValue === action.payload.upc.currentValue)
      if (!updatedProduct) {
        newState.currentInventory.push(action.payload)
      } else {
        newState.currentInventory = newState.currentInventory.map((product) => {
          if (product.upc.currentValue === action.payload.upc.currentValue) {
            return action.payload
          } else {
            return product
          }
        })
      }
      // TODO: Write item to SQL database usingnoon holdThis function
      return reducerCleanup(newState)
    case `RESTOCK_INVENTORY`: // when clicking the restock button
      newState.currentInventory = newState.currentInventory.map((product) => {
        if (action.payload.find((productToFind: IIMPProduct) => productToFind.upc === product.upc)) {
          product.quantityInInventory.currentValue = product.maxQuantity.currentValue
        }
        return product
      })
      return reducerCleanup(newState)
    case `INVENTORY_SEARCH`: // when typing in the inventory search bar
      newState.inventorySearch = action.payload
      newState.filteredInventory = filterSearchResults(newState.inventorySearch, newState.currentInventory)
      return reducerCleanup(newState)
    case `ORDER_SEARCH`: // when typing in the order search bar
      newState.orderSearch = action.payload
      newState.filteredOrder = filterSearchResults(newState.orderSearch, newState.currentInventory)
      return reducerCleanup(newState)
    case `RESTOCK_SEARCH`: // when typing in the restock search bar
      newState.restockSearch = action.payload
      newState.filteredRestock = filterSearchResults(newState.restockSearch, newState.currentInventory)
      return reducerCleanup(newState)
    case `DECREMENT_NUMBER`: // when clicking a - button
      primitiveParent = determinePrimitiveParent(action.payload.parentUpc, newState)
      parentProduct = newState.currentInventory[primitiveParent] || newState.productToReceive
      isMoreThanMin = action.payload.currentValue > action.payload.minValue!
      switch (action.payload.id) {
        case `Minimum Quantity`:
          if (isMoreThanMin) {
            parentProduct.minQuantity.currentValue--
          } else {
            parentProduct.minQuantity.currentValue = action.payload.minValue
          }
          break
        case `Maximum Quantity`:
          if (isMoreThanMin) {
            parentProduct.maxQuantity.currentValue--
          } else {
            parentProduct.maxQuantity.currentValue = action.payload.minValue
          }
          break
        case `Purchase Price`:
          if (isMoreThanMin) {
            parentProduct.purchasePrice.currentValue -= 0.01
          } else {
            parentProduct.purchasePrice.currentValue = action.payload.minValue
          }
          break
        case `Sale Price`:
          if (isMoreThanMin) {
            ;(parentProduct.salePrice.currentValue -= 0.01).toFixed(2)
          } else {
            parentProduct.salePrice.currentValue = action.payload.minValue
          }
          break
        case `On Hand`:
          if (isMoreThanMin) {
            parentProduct.quantityInInventory.currentValue--
          } else {
            parentProduct.quantityInInventory.currentValue = action.payload.minValue
          }
          break
        case `UPC`:
          if (isMoreThanMin) {
            parentProduct.upc.currentValue--
          } else {
            parentProduct.upc.currentValue = action.payload.minValue
          }
          break
        case `To Restock`:
          if (isMoreThanMin) {
            parentProduct.quantityToRestock.currentValue--
          } else {
            parentProduct.quantityToRestock.currentValue = action.payload.minValue
          }
          break
        case `To Receive`:
          if (isMoreThanMin) {
            parentProduct.quantityToReceive.currentValue--
          } else {
            parentProduct.quantityToReceive.currentValue = action.payload.minValue
          }
          break
        case `In Cart`:
          isMoreThanMin ? parentProduct.quantityInCart.currentValue-- : (parentProduct.quantityInCart.currentValue = action.payload.minValue)
          newState.cart = refreshCartStatus(parentProduct, newState.cart)
          break
        default:
          console.error(`IMPError: could not find product with UPC ${action.payload.parentUpc} while decrementing ${action.payload.id}`)
          return state
      }
      primitiveParent === -1 ? (newState.productToReceive = parentProduct) : (newState.currentInventory[primitiveParent] = parentProduct)
      return reducerCleanup(newState)
    case `INCREMENT_NUMBER`: // when clicking a + button
      primitiveParent = determinePrimitiveParent(action.payload.parentUpc, newState)
      parentProduct = newState.currentInventory[primitiveParent] || newState.productToReceive
      isLessThanMax = action.payload.currentValue < action.payload.maxValue!
      isLessThanOnHand = action.payload.currentValue < parentProduct.quantityInInventory.currentValue
      switch (action.payload.id) {
        case `Minimum Quantity`:
          isLessThanMax ? parentProduct.minQuantity.currentValue++ : (parentProduct.minQuantity.currentValue = action.payload.minValue)
          break
        case `Maximum Quantity`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.maxQuantity.currentValue = action.payload.minValue)
          break
        case `Purchase Price`:
          isLessThanMax ? (parentProduct.purchasePrice.currentValue += 0.01) : (parentProduct.purchasePrice.currentValue = action.payload.minValue)
          break
        case `Sale Price`:
          isLessThanMax ? (parentProduct.salePrice.currentValue += 0.01).toFixed(2) : (parentProduct.salePrice.currentValue = action.payload.minValue)
          break
        case `On Hand`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.quantityInInventory.currentValue = action.payload.minValue)
          break
        case `UPC`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.upc.currentValue = action.payload.minValue)
          break
        case `To Restock`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.quantityToRestock.currentValue = action.payload.minValue)
          break
        case `To Receive`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.quantityToReceive.currentValue = action.payload.minValue)
          break
        case `In Cart`:
          isLessThanMax ? parentProduct.maxQuantity.currentValue++ : (parentProduct.quantityInCart.currentValue = action.payload.minValue)
          isLessThanOnHand ? parentProduct.quantityInCart.currentValue++ : (parentProduct.quantityInCart.currentValue = parentProduct.quantityInInventory.currentValue)
          newState.cart = refreshCartStatus(parentProduct, newState.cart)
          break
      }
      primitiveParent === -1 ? (newState.productToReceive = parentProduct) : (newState.currentInventory[primitiveParent] = parentProduct)
      return reducerCleanup(newState)
    case `SET_NUMBER`: // when typing in a text field that accepts numbers
      isMoreThanMin = action.payload.currentValue >= action.payload.minValue!
      isLessThanMax = action.payload.currentValue <= action.payload.maxValue!
      isInRange = isMoreThanMin && isLessThanMax
      primitiveParent = determinePrimitiveParent(action.payload.parentUpc, newState)
      parentProduct = newState.currentInventory[primitiveParent] || newState.productToReceive
      switch (action.payload.id) {
        case `Minimum Quantity`:
          if (isInRange) {
            parentProduct.minQuantity = action.payload
          }
          break
        case `Maximum Quantity`:
          if (isInRange) {
            parentProduct.maxQuantity = action.payload
          }
          break
        case `Purchase Price`:
          if (isInRange) {
            parentProduct.purchasePrice = { ...action.payload, currentValue: parseFloat(action.payload.currentValue.toFixed(2)) }
          }
          break
        case `Sale Price`:
          if (isInRange) {
            parentProduct.salePrice = { ...action.payload, currentValue: parseFloat(action.payload.currentValue.toFixed(2)) }
          }
          break
        case `On Hand`:
          if (isInRange) {
            parentProduct.quantityInInventory = action.payload
          }
          break
        case `UPC`:
          if (isInRange) {
            parentProduct.upc = action.payload
          }
          break
        case `To Restock`:
          if (isInRange) {
            parentProduct.quantityToRestock = action.payload
          }
          break
        case `To Receive`:
          if (isInRange) {
            parentProduct.quantityToReceive = action.payload
          }
          break
        case `In Cart`:
          if (isInRange) {
            parentProduct.quantityInCart = action.payload
            // is the quantity in cart greater than the quantity in inventory
            // if so, set the quantity in cart to the quantity in inventory
            if (parentProduct.quantityInCart.currentValue > parentProduct.quantityInInventory.currentValue) {
              parentProduct.quantityInCart.currentValue = parentProduct.quantityInInventory.currentValue
            }
            newState.cart = refreshCartStatus(parentProduct, newState.cart)
          }
          break
        default:
          console.error(`IMPError: could not find product with UPC ${action.payload.parentUpc} while setting ${action.payload.id}`)
          return state
      }
      newState.currentInventory[primitiveParent] = parentProduct
      return reducerCleanup(newState)
    case `SET_STRING`: // when typing in a text field that accepts strings
      primitiveParent = determinePrimitiveParent(action.payload.parentUpc, newState)
      parentProduct = newState.currentInventory[primitiveParent] || newState.productToReceive
      if (primitiveParent === -1) {
        newState.productToReceive.name = action.payload
      } else {
        newState.currentInventory[primitiveParent].name = action.payload
      }
      return reducerCleanup(newState)
    default:
      return state
  }
}
