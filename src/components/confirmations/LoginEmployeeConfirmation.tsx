/** @format */
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a login confirmation
 * @returns a React.FC that confirms logging in as an employee
 */
export const LoginEmployeeConfirmation: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return <div className={`Confirmation`}>{state.loggedInUser === `Employee` ? <p>Successfully logged into IMP as Employee.</p> : null}</div>
}
