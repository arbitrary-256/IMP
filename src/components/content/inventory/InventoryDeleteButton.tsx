/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/**
 * the search component in the inventory tab
 * @param product the IIMPProduct to delete
 * @returns a React.FC that displays a search field for the inventory tab
 */
export const InventoryDeleteButton: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <IconButton key={`${product.upc.value}DeleteButton`} size={`small`} color={`error`} disabled={!product.editingMode}
      onClick={(): void => {
        dispatch({
          type: `DELETE_INVENTORY`,
          payload: product
        })
      }}
    >
      <Delete />
    </IconButton>
  )
}
