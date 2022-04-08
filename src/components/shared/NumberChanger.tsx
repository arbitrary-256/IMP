/** @format */
import { Button, Input, Stack } from '@mui/material'
import * as React from 'react'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
import { ImpContext } from '../ImpContext'
/**
 * a component to change a number in a product
 * @param toChange an IIMPNumber and an IIMPProduct
 * @returns a component to change the numbers in a product
 */
export const NumberChanger: React.FC<IIMPProductNumberToChange> = (toChange: IIMPProductNumberToChange): React.ReactElement => {
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
            payload: { number: toChange.number, product: toChange.product }
          })
        }}
      >
        -
      </Button>
      <p>{`${toChange.number.id}: ${toChange.number.prefix ? toChange.number.prefix : ``}`}</p>
      <Input
        className={`NumberChanger`}
        key={`orderSearch`}
        type={`number`}
        value={
          toChange.number.propertyName.toString() === `price` || toChange.number.propertyName.toString() === `cost` ? parseFloat(toChange.number.value.toString()).toFixed(2) : toChange.number.value
        }
        onChange={(numberChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
          dispatch({
            type: `SET_NUMBER`,
            payload: { number: { ...toChange.number, value: parseFloat(numberChangeEvent.target.value) }, product: toChange.product }
          })
        }}
      />
      {`${toChange.number.suffix ? toChange.number.suffix : ``}`}
      <p />
      <Button
        size={`small`}
        variant={`contained`}
        onClick={() => {
          dispatch({
            type: `INCREMENT_NUMBER`,
            payload: { number: toChange.number, product: toChange.product }
          })
        }}
      >
        +
      </Button>
    </Stack>
  )
}
