/** @format */
import { ILoginValue } from '../../unionTypes/ILoginValue'
/**
 * an action interface for changing the logged in user
 */
export interface IChangeLoginAction {
  type: `CHANGE_LOGIN`
  payload: ILoginValue
}
