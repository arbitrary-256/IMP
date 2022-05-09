/** @format */
/* interfaces */
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * Module 2.1.4.1.1
 * an action interface for decrementing a number
 */
export interface IDecrementNumberAction {
  type: `DECREMENT_NUMBER`
  payload: IIMPProductNumberToChange
}
