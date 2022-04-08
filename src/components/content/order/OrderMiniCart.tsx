/** @format */
import { Grid } from '@mui/material'
import * as React from 'react'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { OrderMiniCartItem } from './OrderMiniCartItem'
/**
 * the order tab's right div that displays a small version of the cart
 * @returns a React.FC that displays a small version of the cart
 */
export const OrderMiniCart: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = state.cart
  return (
    <Grid container className={`OrderMiniCart`} spacing={2} columns={1}>
      {newCart.map(
        (product: IIMPProduct): React.ReactElement => (
          <Grid item key={`OrderMiniCart${product.upc.value}`}>
            {OrderMiniCartItem(product)}
          </Grid>
        )
      )}
    </Grid>
  )
}
