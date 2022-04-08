/** @format */
import * as React from 'react'
import { Button } from '@mui/material'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
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
      onClick={() => {
        dispatch({
          type: `UNDO`
        })
      }}
      disabled={!isLoggedIn || state.stateHistory.length === 0}
      variant={!isLoggedIn || state.stateFuture.length === 0 ? `contained` : `text`}
    >
      Undo
    </Button>
  )
}
