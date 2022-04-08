/** @format */
import * as React from 'react'
import { Switch, Theme } from '@mui/material'
import { darkTheme } from '../theme/darkTheme'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a dark mode switch component that toggles the dark mode of the application
 * @returns a component to toggle the dark mode of the application
 */
export const DarkModeSwitch: React.FC = (): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Switch
      key={`ThemeToggleSwitch`}
      checked={state.theme === darkTheme ? true : false}
      onClick={() => {
        dispatch({
          type: `CHANGE_APPEARANCE`,
          payload: state.theme as Theme
        })
      }}
    />
  )
}
