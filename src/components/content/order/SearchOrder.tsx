/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { TextField } from '@mui/material'
/* react context */
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/**`
 * 1.7.2.5.	Order Search Module
 */
/**
 * the search component for the order tab
 * @returns a React.FC that displays a search field for the order tab
 */
export const SearchOrder: React.FC = (): React.ReactElement => {
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
      key={`orderSearch`}
      type={`text`}
      label={`Search by UPC or Name`}
      value={state.orderSearch}
      onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
          type: `ORDER_SEARCH`,
          payload: textChangeEvent.target.value
        })
      }}
    />
  )
}
