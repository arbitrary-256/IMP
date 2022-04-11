/** @format */
import { TextField } from '@mui/material'
import * as React from 'react'
import { IIMPNumber } from '../../interfaces/IIMPNumber'
/**
 * a component to display a number in a product
 * @param impNumber the IIMPNumber to display
 * @returns a component to display the numbers in a product
 */
export const NumberDisplayer: React.FC<IIMPNumber> = (impNumber: IIMPNumber): React.ReactElement => (
  <TextField
    className={`NumberDisplayer`}
    type={`number`}
    label={`${impNumber.id}`}
    contentEditable={false}
    fullWidth={true}
    value={
      impNumber.propertyName.toString() === `price` ||
      impNumber.propertyName.toString() === `cost` ||
      impNumber.propertyName.toString() === `Cart Total` ||
      impNumber.propertyName.toString() === `Item Total`
        ? parseFloat(impNumber.value.toString()).toFixed(2)
        : impNumber.value
    }
  />
)
