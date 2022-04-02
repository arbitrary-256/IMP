/** @format */
import * as React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
import { NavBarButton } from './NavBarButton'
/**
 * @returns a React.FC that displays the admin-only navigation buttons in the navbar
 */
export const AdminNavButtons: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const isAdmin: boolean = state.loggedInUser === `Administrator`
  return (
    <>
      {isAdmin ? NavBarButton(`Receiving`) : null}
      {isAdmin ? NavBarButton(`Inventory`) : null}
      {isAdmin ? NavBarButton(`Restock`) : null}
    </>
  )
}
