/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
/* react context */
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/**
 * 1.7.4.2.	Inventory Edit Button Module
 */
/**
 * the search component in the inventory tab
 * * @param product the IIMPProduct to edit
 * @returns a React.FC that displays a search field for the inventory tab
 */
export const InventoryEditButton: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    dispatch
  }: {
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <IconButton
      key={`${product.upc.value}EditButton`}
      size={`small`}
      color={product.editingMode === false ? `warning` : `success`}
      onClick={(): void => {
        dispatch({
          type: `EDIT_INVENTORY`,
          payload: product
        })
      }}>
      <Edit />
    </IconButton>
  )
}
