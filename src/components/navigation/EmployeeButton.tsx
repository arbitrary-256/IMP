/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Button } from '@mui/material'
/* interfaces */
import { INavBarTarget } from '../../interfaces/unionTypes/INavBarTarget'
/* react context */
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * 1.6.4.	Point-of-Sale Buttons
 * Provides the interface for a user to select between and access Order and Cart views. Usable by all users.
 */
/**
 * a button accessible to users logged in as an employee or manager
 * @returns a React.FC that displays a button usable by a logged in employee or Manager
 */
export const EmployeeButton: React.FC<INavBarTarget> = (target: INavBarTarget): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Button
      size={`large`}
      className={`NavBarButton`}
      color={`success`}
      variant={state.contentAreaView === target ? `text` : `contained`}
      onClick={() => {
        dispatch({
          type: `USE_NAV_BAR`,
          payload: target
        })
      }}
      disabled={state.loggedInUser.includes(`Logged Out`) || state.contentAreaView === target}>
      {target}
    </Button>
  )
}
