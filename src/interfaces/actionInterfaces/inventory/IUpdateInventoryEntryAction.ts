/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * 2.1.4.6.5
 * the interface for an action that updates an inventory item in the application state
 */
export interface IUpdateInventoryEntryAction {
  type: `UPDATE_INVENTORY`
  payload: IIMPProduct
}
