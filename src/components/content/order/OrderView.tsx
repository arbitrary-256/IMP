/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Stack } from '@mui/material'
/* interfaces */
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/* react context */
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { OrderGrid } from './OrderGrid'
import { OrderMiniCart } from './OrderMiniCart'
import { SearchOrder } from './SearchOrder'
/**
 * the order tab
 * 
 * satisfies requirements 3, 8, 10, 11
 * 
 * @returns a React.FC that displays the order tab of the UI
 */
export const OrderView: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = state.cart
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
    <Box
      className={`OrderView`}
      sx={{ display: state.contentAreaView === `Order` ? `block` : `none` }}>
      <Box className={`SearchInput`}>{SearchOrder({})}</Box>
      <Stack
        className={`OrderViewSizer`}
        direction={`row`}>
        <Box>{OrderGrid({})}</Box>
        <Box width={`100%`}>
          <p />
          {NumberDisplayer(cartTotal)}
          <p />
          {OrderMiniCart({})}
        </Box>
      </Stack>
    </Box>
  )
}
