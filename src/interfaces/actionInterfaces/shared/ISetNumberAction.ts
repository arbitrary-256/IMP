/** @format */
/* interfaces */
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * Module 2.1.4.1.4
 * an action interface for replacing the value of a number
 */
export interface ISetNumberAction {
  type: `SET_NUMBER`
  payload: IIMPProductNumberToChange
}
