/** @format */
import { IIMPProductStringToChange } from '../../productProperties/IIMPProductStringToChange'
/**
 * an action interface for replacing the value of a string
 */
export interface ISetStringAction {
  type: `SET_STRING`
  payload: IIMPProductStringToChange
}
