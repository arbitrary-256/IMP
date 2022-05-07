/** @format */
/* material-ui components */
import { Theme } from '@mui/material'
/**
 * an action interface to toggle between light and dark theme
 */
export interface IChangeAppearanceAction {
  type: `CHANGE_APPEARANCE`
  payload: Theme
}
