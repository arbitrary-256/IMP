/** @format */
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * an action interface for decrementing a number
 */
export interface IDecrementNumberAction {
  type: `DECREMENT_NUMBER`
  payload: IIMPProductNumberToChange
}
