/** @format */
import * as React from 'react'
import { Button } from '@mui/material'
import { INavBarTarget } from '../../interfaces/unionTypes/INavBarTarget'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
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
      variant={state.contentAreaView === target ? `text` : `contained`}
      onClick={() => {
        dispatch({
          type: `USE_NAV_BAR`,
          payload: target
        })
      }}
      disabled={state.loggedInUser.includes(`Logged Out`) || state.contentAreaView === target}
    >
      {target}
    </Button>
  )
}
