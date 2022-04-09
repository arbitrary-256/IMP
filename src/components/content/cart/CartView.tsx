/** @format */
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Grid } from '@mui/material'
import { CartGridItem } from './CartGridItem'
import { PurchaseCartButton } from './PurchaseCartButton'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { Box } from '@mui/system'
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
/**
 * the cart tab
 * @returns a React.FC that displays the Cart tab of the UI
 */
export const CartView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = state.cart
  const totalPrices: number[] = newCart.map((product: IIMPProduct): number => product.price.value * product.inCart.value)
  const totalPrice: number = totalPrices.reduce((accumulator: number, value: number): number => accumulator + value, 0)
  let cartTotal: IIMPNumber = {
    value: parseFloat(totalPrice.toFixed(2)),
    prefix: `$`,
    suffix: ``,
    min: 0,
    max: 0,
    id: `Cart Total`,
    propertyName: `Cart Total`
  }
  return (
    <Box className={`CartGrid`} sx={{ display: state.contentAreaView === `Cart` ? `block` : `none` }}>
      <p />
      <PurchaseCartButton />
      {NumberDisplayer(cartTotal)}
      <p />
      <Grid container spacing={2}>
        {state.cart.map((eachProduct: IIMPProduct) => (
          <Grid item key={`CartCard${eachProduct.upc.value}`} className={`CartGridItem`}>
            {CartGridItem(eachProduct)}
          </Grid>
        ))}
      </Grid>
      <p />
    </Box>
  )
}
