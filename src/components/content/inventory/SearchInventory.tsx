/** @format */
import { Input } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/**
 * @products the IIMPProduct[] to be filtered
 * @returns a React.FC that displays a search field for the inventory tab
 */
export const SearchInventory: React.FC<IIMPProduct[]> = (products: IIMPProduct[]): React.ReactElement => {
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
        key={`inventorySearch`}
        type={`text`}
        value={state.inventorySearch}
        onChange={(textChangeEvent: React.ChangeEvent<HTMLInputElement>): void => {
          dispatch({
            type: `INVENTORY_SEARCH`,
            payload: textChangeEvent.target.value
          })
        }}
      />
    </>
  )
}
