/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Grid } from '@mui/material'
/* interfaces */
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/* react context */
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { OrderMiniCartItem } from './OrderMiniCartItem'
/**
 * 1.7.2.3.	Compact Cart Display
 */
/**
 * the order tab's right div that displays a small version of the cart
 * @returns a React.FC that displays a small version of the cart
 */
export const OrderMiniCart: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = [...state.cart]
  const total: number = newCart.reduce((accumulator: number, currentValue: IIMPProduct): number => {
    return accumulator + currentValue.price.value * currentValue.inCart.value
  }, 0)
  let cartTotal: IIMPNumber = {
    value: total,
    min: 0,
    max: 0,
    id: `Cart Total`,
    propertyName: `Cart Total`
  }
  cartTotal.value = parseFloat(cartTotal.value.toFixed(2))
  return (
    <>
      <p />
      <Grid
        container
        className={`OrderMiniCart`}
        spacing={2}
        columns={1}>
        {newCart.map(
          (product: IIMPProduct): React.ReactElement => (
            <Grid
              item
              key={`OrderMiniCart${product.upc.value}`}>
              {OrderMiniCartItem(product)}
            </Grid>
          )
        )}
      </Grid>
      <p />
      <p />
      {NumberDisplayer(cartTotal)}
    </>
  )
}
