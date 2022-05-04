/** @format */
/* interfaces */
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * an action interface for incrementing a number
 */
export interface IIncrementNumberAction {
  type: `INCREMENT_NUMBER`
  payload: IIMPProductNumberToChange
}
