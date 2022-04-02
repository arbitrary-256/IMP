/** @format */
import * as React from 'react'
import { Button } from '@mui/material'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
/**
 * @returns a React.FC that displays a button in the navbar to step backwards in the application history
 */
export const UndoButton: React.FC = (): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Button
      size={`small`}
      variant={`outlined`}
      className={`UndoButton`}
      onClick={() => {
        dispatch({
          type: `UNDO`
        })
      }}
    >
      Undo
    </Button>
  )
}
