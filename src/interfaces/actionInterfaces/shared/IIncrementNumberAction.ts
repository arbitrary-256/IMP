/** @format */
/* interfaces */
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * Module 2.1.4.1.2
 * an action interface for incrementing a number
 */
export interface IIncrementNumberAction {
  type: `INCREMENT_NUMBER`
  payload: IIMPProductNumberToChange
}
