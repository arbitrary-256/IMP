/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
import { generateProduct } from '../helpers/generateProduct'
/**
 * empties the cart and generates a new productToReceive if the user is logged out
 * @param state the state passed in
 * @returns a new state with a new mocked product in receiving and an empty cart, future, and history
 */
export const logoutCleanup: Function = (state: IIMPState): IIMPState => {
  let newState = { ...state }
  newState.productToReceive = generateProduct()
  newState.cart = []
  newState.stateFuture = []
  newState.stateHistory = []
  return newState
}
