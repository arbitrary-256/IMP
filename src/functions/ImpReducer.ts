/** @format */
// interfaces
import { IIMPProduct } from '../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../interfaces/IIMPAction'
import { IIMPState } from '../interfaces/IIMPState'
// helper functions
import { reducerCleanup } from './helpers/reducerCleanup'
import { changeAppearance } from './helpers/changeAppearance'
import { decrementNumber } from './helpers/decrementNumber'
import { filterSearchResults } from './helpers/filterSearchResults'
import { mockState } from '../mockData/mockState'
import { createEmptyProduct } from './helpers/createEmptyProduct'
import { incrementNumber } from './helpers/incrementNumber'
import { navigateTo } from './helpers/navigateTo'
import { receiveInventory } from './helpers/receiveInventory'
import { restockProducts } from './helpers/restockProducts'
import { setNumber } from './helpers/setNumber'
import { setString } from './helpers/setString'
import { purchaseCart } from './helpers/purchaseCart'
import { setImage } from './helpers/setImage'
import { redo } from './history/redo'
import { undo } from './history/undo'
import { editProduct } from './helpers/editProduct'
import { deleteProduct } from './helpers/deleteProduct'
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
      return mockState()
    case `CHANGE_APPEARANCE`:
      return reducerCleanup({ ...newState, theme: changeAppearance(action.payload) }, state)
    case `CHANGE_LOGIN`:
      return reducerCleanup({ ...newState, loggedInUser: action.payload, contentAreaView: action.payload }, state)
    case `USE_NAV_BAR`:
      return reducerCleanup(navigateTo(action.payload, newState), state)
    case `UNDO`:
      return undo(newState)
    case `REDO`:
      return redo(newState)
    case `PURCHASE_CART`:
      return reducerCleanup(purchaseCart(newState))
    case `REFRESH_DATABASE`: // when pulling data from the database
      // TODO: should query the database with getDatabaseEntry function
      return reducerCleanup(newState)
    case `UPDATE_DATABASE`: // when pushing data to the database
      // TODO: should change the database with updateDatabaseEntry function or createDatabaseEntry function
      return reducerCleanup(newState)
    case `RECEIVE_INVENTORY`:
      return reducerCleanup({ ...newState, inStock: receiveInventory(action.payload, newState.inStock), productToReceive: createEmptyProduct() }, state)
    case `SET_IMAGE`:
      if (action.payload.inventoryIndex === undefined) {
        newState = { ...newState, productToReceive: setImage(action.payload) }
      } else {
        let newStock = [...newState.inStock]
        newStock[action.payload.inventoryIndex] = setImage(action.payload)
        newState = { ...newState, inStock: newStock }
      }
      return reducerCleanup(newState, state)
    case `DELETE_INVENTORY`: // when clicking delete item button
      // TODO: delete item from SQL database using forgetIt function
      return reducerCleanup({ ...newState, inStock: deleteProduct(action.payload, newState.inStock) }, state)
    case `UPDATE_INVENTORY`: // when clicking a submit update button in the inventory control menu
      let updatedProduct: IIMPProduct | undefined = newState.inStock.find((product) => product.upc.value === action.payload.upc.value)
      !updatedProduct ? newState.inStock.push(action.payload) : (newState.inStock = newState.inStock.map((product) => (product.upc.value === action.payload.upc.value ? action.payload : product)))
      // TODO: Write item to SQL database using updateDatabaseEntry function
      return reducerCleanup(newState, state)
    case `EDIT_INVENTORY`:
      return reducerCleanup({ ...newState, inStock: editProduct(action.payload, newState.inStock) }, state)
    case `RESTOCK_INVENTORY`:
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
    case `SET_NUMBER`: // TODO: remove arrows in text field
      return reducerCleanup(newState, state, setNumber(action.payload))
    case `SET_STRING`: // TODO: assign an IIMPString.text anywhere in the application
      return reducerCleanup(newState, state, setString(action.payload))
    default:
      return state
  }
}
