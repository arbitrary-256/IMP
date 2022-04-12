/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { TextField } from '@mui/material'
// interfaces
import { IIMPProductStringToChange } from '../../interfaces/productProperties/IIMPProductStringToChange'
// react context
import { IIMPAction } from '../../interfaces/IIMPAction'
import { IIMPState } from '../../interfaces/IIMPState'
import { ImpContext } from '../ImpContext'
/**
 * a component to change a string in a product
 * @param toChange an IIMPString, a string primitive, and an IIMPProduct
 * @returns a component to change a string in a product
 */
export const StringChanger: React.FC<IIMPProductStringToChange> = (toChange: IIMPProductStringToChange): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <TextField
      className={`StringChanger`}
      key={`orderSearch`}
      type={`text`}
      label={`Product Name`}
      fullWidth
      value={toChange.string.text}
      onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
          type: `SET_STRING`,
          payload: { string: toChange.string, newValue: textChangeEvent.target.value, product: toChange.product }
        })
      }}
    />
  )
}
