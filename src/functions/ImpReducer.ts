/** @format */
/* react context */
import { IIMPAction } from '../interfaces/IIMPAction'
import { IIMPState } from '../interfaces/IIMPState'
/* helper functions */
import { changeAppearance } from './helpers/changeAppearance'
import { decrementNumber } from './helpers/decrementNumber'
import { editProduct } from './helpers/editProduct'
import { filterSearchResults } from './helpers/filterSearchResults'
import { incrementNumber } from './helpers/incrementNumber'
import { navigateTo } from './helpers/navigateTo'
import { purchaseCart } from './helpers/purchaseCart'
import { receiveInventory } from './helpers/receiveInventory'
import { reducerCleanup } from './helpers/reducerCleanup'
import { restockProducts } from './helpers/restockProducts'
import { setNumber } from './helpers/setNumber'
import { setString } from './helpers/setString'
import { setImage } from './helpers/setImage'
import { mockState } from '../mockData/mockState'
import { mockProduct } from '../mockData/mockProduct'
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
    case `APPLICATION_START`:
      return mockState()
    case `CHANGE_APPEARANCE`:
      return reducerCleanup({ ...newState, theme: changeAppearance(action.payload) }, state)
    case `CHANGE_LOGIN`:
      return reducerCleanup({ ...newState, loggedInUser: action.payload, contentAreaView: action.payload }, state)
    case `USE_NAV_BAR`:
      return reducerCleanup(navigateTo(action.payload, newState), state)
    case `PURCHASE_CART`:
      return reducerCleanup(purchaseCart(newState))
    case `RECEIVE_INVENTORY`:
      return reducerCleanup({ ...newState, inStock: receiveInventory(action.payload, newState.inStock), productToReceive: mockProduct() /*createEmptyProduct()*/ }, state)
    case `SET_IMAGE`:
      if (action.payload.inventoryIndex === undefined) {
        newState = { ...newState, productToReceive: setImage(action.payload) }
      } else {
        let newStock = [...newState.inStock]
        newStock[action.payload.inventoryIndex] = setImage(action.payload)
        newState = { ...newState, inStock: newStock }
      }
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
    case `SET_NUMBER`:
      return reducerCleanup(newState, state, setNumber(action.payload))
    case `SET_STRING`:
      return reducerCleanup(newState, state, setString(action.payload))
    default:
      return state
  }
}
