/** @format */
/* interfaces */
import { IIMPProductStringToChange } from '../../productProperties/IIMPProductStringToChange'
/**
 * Module 2.1.4.1.4
 * an action interface for replacing the value of a string
 */
export interface ISetStringAction {
  type: `SET_STRING`
  payload: IIMPProductStringToChange
}
