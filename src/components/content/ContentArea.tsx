/** @format */
import * as React from 'react'
import { IIMPState } from '../../interfaces/IIMPState'
import { IIMPAction } from '../../interfaces/IIMPAction'
import { ImpContext } from '../ImpContext'
import { CartView } from './cart/CartView'
import { InventoryView } from './inventory/InventoryView'
import { ReceivingView } from './receiving/ReceivingView'
import { LoginEmployeeView } from '../loginIndicators/LoginEmployeeView'
import { LoginAdministratorView } from '../loginIndicators/LoginAdministratorView'
import { LoginAdministratorConfirmation } from '../confirmations/LoginAdministratorConfirmation'
import { LoginEmployeeConfirmation } from '../confirmations/LoginEmployeeConfirmation'
import { LogoutConfirmation } from '../confirmations/LogoutConfirmation'
import { LogoutView } from '../loginIndicators/LogoutView'
import { OrderView } from './order/OrderView'
import { ReceivingConfirmation } from '../confirmations/ReceivingConfirmation'
import { RestockView } from './restock/RestockView'
/**
 * @returns a React.FC that displays the main content area of the UI
 */
export const ContentArea: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <div className={`ContentArea`}>
      {state.contentAreaView === `Employee` ? LoginEmployeeConfirmation({}) : null}
      {state.contentAreaView === `Administrator` ? LoginAdministratorConfirmation({}) : null}
      {state.contentAreaView === `Logged Out` ? LogoutConfirmation({}) : null}
      {state.contentAreaView === `Received` ? ReceivingConfirmation({}) : null}
      {state.loggedInUser === `Employee` ? LoginEmployeeView({}) : null}
      {state.loggedInUser === `Administrator` ? LoginAdministratorView({}) : null}
      {state.loggedInUser === `Logged Out` ? LogoutView({}) : null}
      {state.contentAreaView === `Order` ? OrderView({}) : null}
      {state.contentAreaView === `Receiving` ? ReceivingView(state.productToReceive) : null}
      {state.contentAreaView === `Restock` ? RestockView({}) : null}
      {state.contentAreaView === `Inventory` ? InventoryView([]) : null}
      {state.contentAreaView === `Cart` ? CartView(state.cart) : null}
    </div>
  )
}
