/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Grid, Stack } from '@mui/material'
/* interfaces */
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
/* react context */
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { CartGridItem } from './CartGridItem'
import { PurchaseCartButton } from './PurchaseCartButton'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
/* helper functions */

/**`
 * 1.7.3.	Cart View Module
 */
/**
 * the cart tab
 * 
 * satisfies requirements 3, 8. Only module to satisfy 8.5.
 * 
 * @returns a React.FC that displays the Cart tab of the UI
 */
export const CartView: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = state.cart
  const totalPrices: number[] = newCart.map((product: IIMPProduct): number => product.price.value * product.inCart.value)
  const totalPrice: number = totalPrices.reduce((accumulator: number, value: number): number => accumulator + value, 0)
  let cartTotal: IIMPNumber = {
    value: parseFloat(totalPrice.toFixed(2)),
    min: 0,
    max: 0,
    id: `Cart Total`,
    propertyName: `Cart Total`
  }
  return (
    <Box
      className={`CartGrid`}
      sx={{ display: state.contentAreaView === `Cart` ? `block` : `none` }}>
      <p />
      <Stack direction={`row`}>
        {NumberDisplayer(cartTotal)}
        {PurchaseCartButton({})}
      </Stack>
      <p />
      <Grid
        container
        spacing={2}>
        {state.cart.map((eachProduct: IIMPProduct) => (
          <Grid
            item
            key={`CartCard${eachProduct.upc.value}`}
            className={`CartGridItem`}>
            {CartGridItem(eachProduct)}
          </Grid>
        ))}
      </Grid>
      <p />
    </Box>
  )
}
