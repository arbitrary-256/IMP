/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
// react context
import { IIMPState } from '../../interfaces/IIMPState'
// helper functions
import { generateProduct } from '../helpers/generateProduct'
/**
 * cleans up the application state at the end of a call to ImpReducer
 * @param newState the current IIMPState to be cleaned up
 * @param oldState OPTIONAL the previous state to be added to state.stateHistory
 * @param product OPTIONAL the product to be cleaned up
 * @returns the cleaned up application state
 */
export const reducerCleanup: Function = (newState: IIMPState, oldState?: IIMPState, product?: IIMPProduct): IIMPState => {
  /**
   * empties the cart and generates a new productToReceive if the user is logged out
   */
  const logoutCleanup: Function = (): void => {
    newState.productToReceive = generateProduct()
    // set the inCart.value of all products in state.inStock to 0
    newState.inStock.forEach((product) => {
      product.inCart.value = 0
    })
    newState.stateFuture = []
    newState.stateHistory = []
  }
  newState.loggedInUser === `Logged Out` ? logoutCleanup() : void 0
  oldState ? newState.stateHistory.push(oldState) : void 0
  product && product.upc.value === newState.productToReceive.upc.value ? (newState.productToReceive = product) : void 0
  newState.cart = newState.inStock.filter((productInInventory) => productInInventory.inCart.value > 0)
  return newState
}
