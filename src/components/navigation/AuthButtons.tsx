/** @format */
import * as React from 'react'
import { Button, Stack } from '@mui/material'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
import { ILoginValue } from '../../interfaces/unionTypes/ILoginValue'
export const AuthButtons: React.FC<ILoginValue> = (user: ILoginValue): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const isLoggedIn: boolean = state.loggedInUser !== `Logged Out`
  if (!isLoggedIn) {
    return (
      <Stack className={`AuthButtons`} direction={`row`}>
        <Button
          onClick={() => {
            dispatch({
              type: `CHANGE_LOGIN`,
              payload: `Administrator`
            })
          }}
        >
          {`Login Administrator`}
        </Button>
        <p />
        <Button
          onClick={() => {
            dispatch({
              type: `CHANGE_LOGIN`,
              payload: `Employee`
            })
          }}
        >
          {`Login Employee`}
        </Button>
      </Stack>
    )
  } else {
    return (
      <Stack className={`AuthButtons`} direction={`row`}>
        <Button
          className={`AuthBquit`}
          onClick={() => {
            dispatch({
              type: `CHANGE_LOGIN`,
              payload: user
            })
          }}
        >
          Log Out
        </Button>
      </Stack>
    )
  }
}
