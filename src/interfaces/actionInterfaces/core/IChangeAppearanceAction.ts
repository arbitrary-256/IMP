/** @format */
/* material-ui components */
import { Theme } from '@mui/material'
/**
 * Module 2.1.4.4.2
 * an action interface to toggle between light and dark theme
 */
export interface IChangeAppearanceAction {
  type: `CHANGE_APPEARANCE`
  payload: Theme
}
