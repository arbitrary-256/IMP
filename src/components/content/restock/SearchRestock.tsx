/** @format */
import { Input } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/**
 * @products the IIMPProduct to be filtered
 * @returns a React.FC that displays a search field for the restock tab
 */
export const SearchRestock: React.FC<IIMPProduct[]> = (products: IIMPProduct[]): React.ReactElement => {
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
