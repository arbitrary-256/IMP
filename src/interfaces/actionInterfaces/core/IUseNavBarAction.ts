/** @format */
import { INavBarTarget } from '../../unionTypes/INavBarTarget'
export interface IUseNavBarAction {
  type: `USE_NAV_BAR`
  payload: INavBarTarget
}
