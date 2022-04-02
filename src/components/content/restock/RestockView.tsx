/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { RestockItem } from './RestockItem'
import { Button, Grid } from '@mui/material'
/**
 * @returns a React.FC that displays the Restock tab of the UI
 */
export const RestockView: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const itemsToBeOrdered: IIMPProduct[] = state.currentInventory.filter((product: IIMPProduct): boolean => {
    return product.quantityInInventory.currentValue <= product.minQuantity.currentValue
  })
  return (
    <div className={`Restock`}>
      <Button
        size={`small`}
        variant={`contained`}
        onClick={() => {
          dispatch({
            type: `RESTOCK_INVENTORY`,
            payload: itemsToBeOrdered
          })
        }}
      >
        Restock All Products
      </Button>
      <p />
      <Grid container spacing={2}>
        {itemsToBeOrdered.map(RestockItem)}
      </Grid>
    </div>
  )
}
