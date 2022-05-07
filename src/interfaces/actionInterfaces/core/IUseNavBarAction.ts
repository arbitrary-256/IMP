/** @format */
/* interfaces */
import { INavBarTarget } from '../../unionTypes/INavBarTarget'
/**
 * an action interface for navigating to a different tab of the application
 */
export interface IUseNavBarAction {
  type: `USE_NAV_BAR`
  payload: INavBarTarget
}
