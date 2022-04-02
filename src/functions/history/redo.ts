/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
export const redo: Function = (state: IIMPState): IIMPState => {
  if (state.stateFuture.length !== 0) {
    state.stateHistory.push(state.stateFuture.pop()!)
  }
  return state
}
