/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, Theme } from '@mui/material'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
// non-TypeScript data
import { darkTheme } from '../theme/darkTheme'
/**
 * a dark mode switch component that toggles the dark mode of the application
 * @returns a component to toggle the dark mode of the application
 */
export const DarkModeButton: React.FC = (): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <IconButton
      key={`ThemeButton`}
      size={`small`}
      color={`warning`}
      onClick={() => {
        dispatch({
          type: `CHANGE_APPEARANCE`,
          payload: state.theme as Theme
        })
      }}>
      {state.theme === darkTheme ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}
