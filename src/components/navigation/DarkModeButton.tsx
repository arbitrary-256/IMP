/** @format */
import * as React from 'react'
import { IconButton, Theme } from '@mui/material'
import { darkTheme } from '../theme/darkTheme'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
import { DarkMode, LightMode } from '@mui/icons-material'
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
      // checked={state.theme === darkTheme ? true : false}
      onClick={() => {
        dispatch({
          type: `CHANGE_APPEARANCE`,
          payload: state.theme as Theme
        })
      }}
    >
      {state.theme === darkTheme ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}
