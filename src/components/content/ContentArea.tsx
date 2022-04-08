/** @format */
import * as React from 'react'
import { CartView } from './cart/CartView'
import { InventoryView } from './inventory/InventoryView'
import { ReceivingView } from './receiving/ReceivingView'
import { LogoutView } from '../loginIndicators/LogoutView'
import { OrderView } from './order/OrderView'
import { RestockView } from './restock/RestockView'
/**
 * the bottom div of the application that contains the tabs selected in the NavBar
 * @returns a React.FC that displays the main content area of the UI
 */
export const ContentArea: React.FC = (): React.ReactElement => {
  return (
    <div className={`ContentArea`}>
      <p></p>
      {LogoutView({})}
      {OrderView({})}
      {ReceivingView({})}
      {RestockView({})}
      {InventoryView({})}
      {CartView({})}
    </div>
  )
}
