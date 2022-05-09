
/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { TextField } from '@mui/material'
/* interfaces */
import { IIMPNumber } from '../../interfaces/IIMPNumber'
/**
 * Module 1.5.3.	Number Display Module
 * Displays a number as part of a larger component

 */
/**
 * a component to display a number in a product
 * @param impNumber the IIMPNumber to display
 * @returns a component to display the numbers in a product
 */
export const NumberDisplayer: React.FC<IIMPNumber> = (impNumber: IIMPNumber): React.ReactElement => (
  <TextField
    className={`NumberDisplayer`}
    type={`text`}
    label={`${impNumber.id}`}
    disabled={true}
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
