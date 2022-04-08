/** @format */
import * as React from 'react'
import { Button } from '@mui/material'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
/**
 * a button that redoes the last change undone from the state
 * @returns a React.FC that displays a button in the navbar to step forwards in the application history
 */
export const RedoButton: React.FC = (): React.ReactElement => {
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
      size={`small`}
      variant={`outlined`}
      className={`RedoButton`}
      onClick={() => {
        dispatch({
          type: `REDO`
        })
      }}
      disabled={!isLoggedIn || state.stateFuture.length === 0}
    >
      Redo
    </Button>
  )
}
