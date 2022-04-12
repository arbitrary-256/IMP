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
      size={`large`}
      className={`RedoButton`}
      color={`warning`}
      onClick={() => {
        dispatch({
          type: `REDO`
        })
      }}
      disabled={!isLoggedIn || state.stateFuture.length === 0}
      variant={!isLoggedIn || state.stateFuture.length === 0 ? `contained` : `text`}
    >
      Redo
    </Button>
  )
}
