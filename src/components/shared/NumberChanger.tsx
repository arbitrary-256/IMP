/** @format */
import { Button, Input, Stack } from '@mui/material'
import * as React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPNumber } from '../../interfaces/IIMPNumber'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
export const NumberChanger: React.FC<IIMPNumber> = (theNumber: IIMPNumber): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Stack direction={`row`}>
      <Button
        size={`small`}
        variant={`contained`}
        onClick={() => {
          dispatch({
            type: `DECREMENT_NUMBER`,
            payload: theNumber
          })
        }}
      >
        -
      </Button>
      <p>
        {`${theNumber.id}: ${theNumber.prefix}`}
        <Input
          className={`StringChanger`}
          key={`orderSearch`}
          type={`number`}
          value={theNumber.currentValue}
          onChange={(numberChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch({
              type: `SET_NUMBER`,
              payload: { ...theNumber, currentValue: parseFloat(numberChangeEvent.target.value) }
            })
          }}
        />
        {`${theNumber.suffix}`}
      </p>
      <Button
        size={`small`}
        variant={`contained`}
        onClick={() => {
          dispatch({
            type: `INCREMENT_NUMBER`,
            payload: theNumber
          })
        }}
      >
        +
      </Button>
    </Stack>
  )
}
