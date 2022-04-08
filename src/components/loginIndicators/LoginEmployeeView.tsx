/** @format */
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a login indicator for employees
 * @returns a React.FC that indicates Employee is logged in
 */
export const LoginEmployeeView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return <div className={`LoginEmployee`}>{state.loggedInUser === `Employee` ? <p>Employees should logout when they're done using IMP.</p> : null}</div>
}
