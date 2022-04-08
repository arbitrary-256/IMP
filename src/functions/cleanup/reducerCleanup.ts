/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
import { logoutCleanup } from './logoutCleanup'
import { cartCleanup } from './cartCleanup'
/**
 * cleans up the application state at the end of a call to ImpReducer
 * @param newState the current IIMPState to be cleaned up
 * @param oldState the previous state to be added to state.stateHistory
 * @param product OPTIONAL the product to be cleaned up
 * @returns the cleaned up application state
 */
export const reducerCleanup: Function = (newState: IIMPState, oldState?: IIMPState, product?: IIMPProduct): IIMPState => {
  newState.loggedInUser === `Logged Out` ? (newState = logoutCleanup(newState)) : void 0
  product ? (newState.cart = cartCleanup(product, newState.cart)) : void 0
  oldState ? newState.stateHistory.push(oldState) : void 0
  newState.cart = newState.cart.filter((productInCart) => productInCart.inCart.value > 0)
  return newState
}
