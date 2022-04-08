/** @format */
import { Box } from '@mui/material'
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a login confirmation
 * @returns a React.FC that confirms logging in as an Manager
 */
export const LoginManagerConfirmation: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return <Box className={`Confirmation`}>{state.loggedInUser === `Manager` ? <p>Successfully logged into IMP as Manager.</p> : null}</Box>
}
