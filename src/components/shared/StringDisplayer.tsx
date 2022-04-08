/** @format */
import { TextField } from '@mui/material'
import * as React from 'react'
import { IIMPString } from '../../interfaces/IIMPString'
/**
 * a component to display a string
 * @param impString the IIMPString to change
 * @returns a component to display a string in a product
 */
export const StringDisplayer: React.FC<IIMPString> = (impString: IIMPString): React.ReactElement => (
  <TextField fullWidth={true} className={`StringDisplayer`} type={`string`} label={`${impString.id}`} disabled={true} value={`${impString.prefix}${impString.text}${impString.suffix}`} />
)
