/** @format */
/* interfaces */
import { ILoginValue } from '../../unionTypes/ILoginValue'
/**
 * Module 2.1.4.2
 * an action interface for changing the logged in user
 */
export interface IChangeLoginAction {
  type: `CHANGE_LOGIN`
  payload: ILoginValue
}
