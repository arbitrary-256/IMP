/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Button } from '@mui/material'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a button that undoes the last change to the state
 * @returns a React.FC that displays a button in the navbar to step backwards in the application history
 */
export const UndoButton: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const isLoggedIn: boolean = state.loggedInUser !== `Logged Out`
  return (
    <Button
      size={`large`}
      className={`UndoButton`}
      color={`warning`}
      onClick={() => {
        dispatch({
          type: `UNDO`
        })
      }}
      disabled={!isLoggedIn || state.stateHistory.length === 0}
      variant={!isLoggedIn || state.stateFuture.length === 0 ? `contained` : `text`}>
      Undo
    </Button>
  )
}
