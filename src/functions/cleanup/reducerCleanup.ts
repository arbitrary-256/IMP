/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
//import { logoutCleanup } from './logoutCleanup'
//import { refreshCartContents } from './refreshCartContents'
import { truncatePrices } from './truncatePrices'
export const reducerCleanup: Function = (newState: IIMPState, previousState: IIMPState): IIMPState => {
  truncatePrices(newState)
  //logoutCleanup(newState.loggedInUser, newState)
  //refreshCartContents(newState.currentInventory)
  newState.stateHistory.push(previousState)
  return newState
}
