/** @format */
import * as React from 'react'
import { UndoButton } from './UndoButton'
import { RedoButton } from './RedoButton'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * @returns a React.FC that displays the admin-only navigation buttons in the navbar
 */
export const StateHistoryButtons: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const isLoggedIn: boolean = state.loggedInUser !== `Logged Out`
  return (
    <>
      {isLoggedIn ? UndoButton({}) : null}
      {isLoggedIn ? RedoButton({}) : null}
    </>
  )
}
