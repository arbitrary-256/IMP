/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
export const undo: Function = (state: IIMPState): IIMPState => {
  if (state.stateHistory.length !== 0) {
    state.stateFuture.push(state.stateHistory.pop()!)
  }
  return state
}
