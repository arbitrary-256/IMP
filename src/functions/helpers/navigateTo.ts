/** @format */
/* interfaces */
import { IIMPState } from '../../interfaces/IIMPState'
import { INavBarTarget } from '../../interfaces/unionTypes/INavBarTarget'
/**
 * navigates to a new tab in the application
 * @param tab the tab to navigate to
 * @param state the current state of the application
 * @returns a new state with the contentAreaView set to the tab passed in
 */
export const navigateTo: Function = (tab: INavBarTarget, state: IIMPState): IIMPState => {
  const newState = {
    ...state,
    contentAreaView: tab
  }
  return newState
}
