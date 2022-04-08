/** @format */
import { TextField } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
/**
 * the search component in the inventory tab
 * @returns a React.FC that displays a search field for the inventory tab
 */
export const SearchInventory: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <TextField
      className={`SearchInput`}
      key={`inventorySearch`}
      type={`text`}
      label={`Search by UPC or Name`}
      value={state.inventorySearch}
      onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
          type: `INVENTORY_SEARCH`,
          payload: textChangeEvent.target.value
        })
      }}
    />
  )
}
