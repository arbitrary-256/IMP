/** @format */
import { IIMPState } from '../interfaces/IIMPState'
import { IIMPAction } from '../interfaces/IIMPAction'
import { IIMPProduct } from '../interfaces/IIMPProduct'
import { reducerCleanup } from './cleanup/reducerCleanup'
import { generateDefaultState } from './helpers/generateDefaultState'
import { navigateTo } from './helpers/navigateTo'
import { filterSearchResults } from './helpers/filterSearchResults'
import { undo } from './history/undo'
import { redo } from './history/redo'
import { decrementNumber } from './helpers/decrementNumber'
import { incrementNumber } from './helpers/incrementNumber'
import { setNumber } from './helpers/setNumber'
import { receiveInventory } from './helpers/receiveInventory'
import { setString } from './helpers/setString'
import { restockProducts } from './helpers/restockProducts'
import { changeAppearance } from './helpers/changeAppearance'
import { purchaseCart } from './helpers/purchaseCart'
import { updateImage } from './helpers/updateImage'
import { generateProduct } from './helpers/generateProduct'
/**
 * Updates application state based on the passed action.
 * All business logic lives in this file or in a function this file imports.
 * @param state the current application state
 * @param action the action to process
 * @returns the new application state
 */
export const ImpReducer = (state: IIMPState, action: IIMPAction): IIMPState => {
  let newState: IIMPState = { ...state }
  switch (action.type) {
    case `APPLICATION_START`: // at launch of application
      // TODO: should get inventory from SQL database with getDatabaseInventory function
      return generateDefaultState()
    case `CHANGE_APPEARANCE`:
      return reducerCleanup({ ...newState, theme: changeAppearance(action.payload) }, state)
    case `CHANGE_LOGIN`:
      return reducerCleanup({ ...newState, loggedInUser: action.payload, contentAreaView: action.payload }, state)
    case `USE_NAV_BAR`:
      return reducerCleanup(navigateTo(action.payload, newState), state)
    case `UNDO`: // when clicking the undo button
      return undo(newState)
    case `REDO`: // when clicking the redo button
      return redo(newState)
    case `PURCHASE_CART`: // when clicking the purchase cart button
      return reducerCleanup(purchaseCart(newState))
    case `REFRESH_DATABASE`: // when pulling data from the database
      // TODO: should query the database with getDatabaseEntry function
      return reducerCleanup(newState)
    case `UPDATE_DATABASE`: // when pushing data to the database
      // TODO: should change the database with updateDatabaseEntry function or createDatabaseEntry function
      return reducerCleanup(newState)
    case `RECEIVE_INVENTORY`:
      return reducerCleanup({ ...newState, inStock: receiveInventory(action.payload, newState.inStock), productToReceive: generateProduct() }, state)
    case `UPDATE_IMAGE`:
      return reducerCleanup({ ...newState, image: updateImage(action.payload) }, state)
    case `DELETE_INVENTORY_ENTRY`: // when clicking delete item button
      // TODO: delete item from SQL database using forgetIt function
      return reducerCleanup(newState, state)
    case `UPDATE_INVENTORY`: // when clicking a submit update button in the inventory control menu
      let updatedProduct: IIMPProduct | undefined = newState.inStock.find((product) => product.upc.value === action.payload.upc.value)
      if (!updatedProduct) {
        newState.inStock.push(action.payload)
      } else {
        newState.inStock = newState.inStock.map((product) => {
          if (product.upc.value === action.payload.upc.value) {
            return action.payload
          } else {
            return product
          }
        })
      }
      // TODO: Write item to SQL database using updateDatabaseEntry function
      return reducerCleanup(newState, state)
    case `RESTOCK_INVENTORY`: // when clicking the restock button
      return reducerCleanup({ ...newState, inStock: restockProducts(action.payload.inventory, action.payload.productsToBeRestocked) }, state)
    case `INVENTORY_SEARCH`:
      return reducerCleanup({ ...newState, inventorySearch: action.payload, filteredInventory: filterSearchResults(action.payload, newState.inStock) }, state)
    case `ORDER_SEARCH`:
      return reducerCleanup({ ...newState, orderSearch: action.payload, filteredOrder: filterSearchResults(action.payload, newState.inStock) }, state)
    case `RESTOCK_SEARCH`:
      return reducerCleanup({ ...newState, restockSearch: action.payload, filteredRestock: filterSearchResults(action.payload, newState.inStock) }, state)
    case `DECREMENT_NUMBER`:
      return reducerCleanup(newState, state, decrementNumber(action.payload))
    case `INCREMENT_NUMBER`:
      return reducerCleanup(newState, state, incrementNumber(action.payload))
    case `SET_NUMBER`:
      return reducerCleanup(newState, state, setNumber(action.payload))
    case `SET_STRING`: // when typing in a text field that accepts strings
      return reducerCleanup(newState, state, setString(action.payload))
    default:
      return state
  }
}
