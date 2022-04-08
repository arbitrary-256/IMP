/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
/**
 * steps backwards through state.stateHistory
 * @param state the current application state
 * @returns the previous application state in state.stateHistory
 */
export const undo: Function = (state: IIMPState): IIMPState => {
  let tempState: IIMPState = { ...state }
  tempState = tempState.stateHistory.pop()!
  tempState.stateFuture.push(tempState)
  return tempState
}
