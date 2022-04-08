/** @format */
import { Theme } from '@mui/material'
/**
 * an action interface to toggle between light and dark theme
 */
export interface IToggleThemeAction {
  type: `TOGGLE_THEME`
  payload: Theme
}
