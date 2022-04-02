/** @format */
import * as React from 'react'
import { OrderMiniCart } from './OrderMiniCart'
import { OrderGrid } from './OrderGrid'
import { Stack } from '@mui/material'
/**
 * @products the IIMPProduct[] to be displayed
 * @returns a React.FC that displays the order tab of the UI
 */
export const OrderView: React.FC = (): React.ReactElement => {
  return (
    <div className={`OrderView`}>
      <Stack className={`OrderViewSizer`} direction={`row`}>
        <div>{OrderGrid({})}</div>
        <div>{OrderMiniCart({})}</div>
      </Stack>
    </div>
  )
}
