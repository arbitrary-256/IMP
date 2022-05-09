/** @format */
/* material-ui components */
import { Theme } from '@mui/material'
/* css-in-TypeScript themes */
import { darkTheme } from '../../components/theme/darkTheme'
import { lightTheme } from '../../components/theme/lightTheme'
/**
 * Module 2.2.2.1
 * toggles the lightTheme and darkTheme
 * @param theme any Material UI Theme
 * @returns lightTheme or darkTheme
 */
export const changeAppearance: Function = (theme: Theme): Theme => {
  switch (theme) {
    case darkTheme:
      return lightTheme
    case lightTheme:
      return darkTheme
    default:
      return lightTheme
  }
}
