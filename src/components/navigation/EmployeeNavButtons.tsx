/** @format */
import * as React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
import { NavBarButton } from './NavBarButton'
/**
 * @returns a React.FC that displays the employee and administrator navigation buttons in the navbar
 */
export const EmployeeNavButtons: React.FC = (): React.ReactElement => {
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
      {isLoggedIn ? NavBarButton(`Order`) : null}
      {isLoggedIn ? NavBarButton(`Cart`) : null}
    </>
  )
}
