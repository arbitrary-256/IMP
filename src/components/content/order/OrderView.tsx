/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Box, Stack } from '@mui/material'
// interfaces
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
// custom components
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { OrderGrid } from './OrderGrid'
import { OrderMiniCart } from './OrderMiniCart'
import { SearchOrder } from './SearchOrder'
/**
 * the order tab
 * @returns a React.FC that displays the order tab of the UI
 */
export const OrderView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const newCart: IIMPProduct[] = state.cart
  const total: number = newCart.reduce((accumulator: number, currentValue: IIMPProduct): number => {
    return accumulator + currentValue.price.value * currentValue.inCart.value
  }, 0)
  let cartTotal: IIMPNumber = {
    value: total,
    prefix: `$`,
    suffix: ``,
    min: 0,
    max: 0,
    id: `Cart Total`,
    propertyName: `Cart Total`
  }
  cartTotal.value = parseFloat(cartTotal.value.toFixed(2))
  return (
    <Box className={`OrderView`} sx={{ display: state.contentAreaView === `Order` ? `block` : `none` }}>
      <Box className={`SearchInput`}>{SearchOrder({})}</Box>
      <Stack className={`OrderViewSizer`} direction={`row`}>
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
