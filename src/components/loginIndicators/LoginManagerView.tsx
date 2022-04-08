/** @format */
import React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a login confirmation for managers
 * @returns a React.FC that indicates Manager is logged in
 */
export const LoginManagerView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return <div className={`LoginAdmin`}>{state.loggedInUser === `Manager` ? <p>Managers must logout when they're done using IMP.</p> : null}</div>
}
