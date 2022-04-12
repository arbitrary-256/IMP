/** @format */
// interfaces
import { IIMPState } from '../../interfaces/IIMPState'
// helper functions
import { generateProduct } from '../helpers/generateProduct'
/**
 * empties the cart and generates a new productToReceive if the user is logged out
 * @param state the state passed in
 * @returns a new state with a new mocked product in receiving and an empty cart, future, and history
 */
export const logoutCleanup: Function = (state: IIMPState): IIMPState => {
  let newState: IIMPState = { ...state }
  newState.productToReceive = generateProduct()
  // set the inCart.value of all products in state.inStock to 0
  newState.inStock.forEach((product) => {
    product.inCart.value = 0
  })
  newState.stateFuture = []
  newState.stateHistory = []
  return newState
}
