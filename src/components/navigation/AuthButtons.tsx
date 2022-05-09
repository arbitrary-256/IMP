

/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Button, Stack } from '@mui/material'
/* interfaces */
import { ILoginValue } from '../../interfaces/unionTypes/ILoginValue'
/* react context */
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'

/**
 * Module 1.6.3.	Role Selection Interface
 * Satisfies Requirements 7, 13. Provides the interface for a user to select the role in which to use 
 */
/**
 * the login buttons component
 * 
 * satisfies requirements 7, 13
 * 
 * @param user the ILoginValue of the user to login as
 * @returns a react component that displays the buttons used to log in or out
 */
export const AuthButtons: React.FC<ILoginValue> = (user: ILoginValue): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Stack
      className={`AuthButtons`}
      direction={`row`}
      spacing={2}>
      <p />
      <Button
        size={`large`}
        color={`secondary`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: `Manager`
          })
          dispatch({
            type: `USE_NAV_BAR`,
            payload: `Inventory`
          })
        }}
        disabled={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`)}
        variant={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`) ? `text` : `contained`}>
        {`Login as Manager`}
      </Button>
      <Button
        size={`large`}
        color={`secondary`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: `Employee`
          })
          dispatch({
            type: `USE_NAV_BAR`,
            payload: `Order`
          })
        }}
        disabled={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`)}
        variant={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`) ? `text` : `contained`}>
        {`Login as Employee`}
      </Button>
      <Button
        size={`large`}
        color={`error`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: user
          })
        }}
        disabled={state.loggedInUser.includes(`Logged Out`)}
        variant={state.loggedInUser.includes(`Logged Out`) ? `text` : `contained`}>
        Log Out
      </Button>
    </Stack>
  )
}
