/** @format */
// interfaces
import { IIMPProduct } from '../../IIMPProduct'
/**
 * an action interface for receiving an inventory item
 */
export interface IReceiveInventoryAction {
  type: `RECEIVE_INVENTORY`
  payload: IIMPProduct
}
