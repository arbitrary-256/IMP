
/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { TextField } from '@mui/material'
/* interfaces */
import { IIMPString } from '../../interfaces/IIMPString'
/**
 * 1.5.5.	String Display Module
 * Displays a string as part of a larger component.

 */
/**
 * a component to display a string
 * @param impString the IIMPString to change
 * @returns a component to display a string in a product
 */
export const StringDisplayer: React.FC<IIMPString> = (impString: IIMPString): React.ReactElement => (
  <TextField
    fullWidth={true}
    disabled={true}
    className={`StringDisplayer`}
    type={`text`}
    label={`${impString.id}`}
    contentEditable={false}
    value={`${impString.text}`}
  />
)
