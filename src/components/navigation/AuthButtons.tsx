/** @format */
import * as React from 'react'
import { Button, Stack } from '@mui/material'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
import { ILoginValue } from '../../interfaces/unionTypes/ILoginValue'
/**
 * the login buttons component
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
    <Stack className={`AuthButtons`} direction={`row`} spacing={2}>
      <p />{' '}
      <Button
        size={`large`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: `Manager`
          })
        }}
        disabled={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`)}
        variant={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`) ? `text` : `contained`}
      >
        {`Login as Manager`}
      </Button>
      <Button
        size={`large`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: `Employee`
          })
        }}
        disabled={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`)}
        variant={state.loggedInUser.includes(`Manager`) || state.loggedInUser.includes(`Employee`) ? `text` : `contained`}
      >
        {`Login as Employee`}
      </Button>
      <Button
        size={`large`}
        onClick={() => {
          dispatch({
            type: `CHANGE_LOGIN`,
            payload: user
          })
        }}
        disabled={state.loggedInUser.includes(`Logged Out`)}
        variant={state.loggedInUser.includes(`Logged Out`) ? `text` : `contained`}
      >
        Log Out
      </Button>
    </Stack>
  )
}
