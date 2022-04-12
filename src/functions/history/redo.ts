/** @format */
// interfaces
import { IIMPState } from '../../interfaces/IIMPState'
/**
 * steps forward through state.stateFuture
 * @param state the current application state
 * @returns the next application state in state.stateFuture
 */
export const redo: Function = (state: IIMPState): IIMPState => {
  let tempState: IIMPState = { ...state }
  tempState = tempState.stateFuture.pop()!
  tempState.stateHistory.push(tempState)
  return tempState
}
