/** @format */
// interfaces
import { IIMPProductNumberToChange } from '../../productProperties/IIMPProductNumberToChange'
/**
 * an action interface for replacing the value of a number
 */
export interface ISetNumberAction {
  type: `SET_NUMBER`
  payload: IIMPProductNumberToChange
}
