/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Box, Paper } from '@mui/material'
// custom components
import { CartView } from './cart/CartView'
import { InventoryView } from './inventory/InventoryView'
import { LogoutView } from '../loginIndicators/LogoutView'
import { OrderView } from './order/OrderView'
import { ReceivingView } from './receiving/ReceivingView'
import { RestockView } from './restock/RestockView'
/**
 * the bottom div of the application that contains the tabs selected in the NavBar
 * @returns a React.FC that displays the main content area of the UI
 */
export const ContentArea: React.FC = (): React.ReactElement => {
  return (
    <Paper>
      <Box className={`ContentArea`}>
        <p />
        {LogoutView({})}
        {OrderView({})}
        {ReceivingView({})}
        {RestockView({})}
        {InventoryView({})}
        {CartView({})}
      </Box>
    </Paper>
  )
}
