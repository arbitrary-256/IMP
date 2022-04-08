/** @format */
import { Input } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
/**
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
    <>
      {`Search: `}
      <Input
        className={`SearchInput`}
        key={`restockSearch`}
        type={`text`}
        value={state.restockSearch}
        onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
          dispatch({
            type: `RESTOCK_SEARCH`,
            payload: textChangeEvent.target.value
          })
        }}
      />
    </>
  )
}
