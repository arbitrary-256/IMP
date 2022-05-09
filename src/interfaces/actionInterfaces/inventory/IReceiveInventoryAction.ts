/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * Module 2.1.4.6.3
 * an action interface for receiving an inventory item
 */
export interface IReceiveInventoryAction {
  type: `RECEIVE_INVENTORY`
  payload: IIMPProduct
}
