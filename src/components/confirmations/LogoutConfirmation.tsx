/** @format */
import { Box } from '@mui/material'
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a logout confirmation
 * @returns a React.FC that confirms logging out
 */
export const LogoutConfirmation: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return <Box className={`Confirmation`}>{state.loggedInUser === `Logged Out` ? <p>Successfully logged out of IMP.</p> : null}</Box>
}
