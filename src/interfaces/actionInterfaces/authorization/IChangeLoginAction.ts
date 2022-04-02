/** @format */
import { ILoginValue } from '../../unionTypes/ILoginValue'
export interface IChangeLoginAction {
  type: `CHANGE_LOGIN`
  payload: ILoginValue
}
