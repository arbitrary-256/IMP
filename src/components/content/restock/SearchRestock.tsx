/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { TextField } from '@mui/material'
/* react context */
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/**
 * 1.7.6.2.	Restock Search Module
 * 
 * the search component for the restock tab
 * @returns a React.FC that displays a search field for the restock tab
 */
export const SearchRestock: React.FC = (): React.ReactElement => {
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
      key={`restockSearch`}
      type={`text`}
      label={`Search by UPC or Name`}
      value={state.restockSearch}
      onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
          type: `RESTOCK_SEARCH`,
          payload: textChangeEvent.target.value
        })
      }}
    />
  )
}
