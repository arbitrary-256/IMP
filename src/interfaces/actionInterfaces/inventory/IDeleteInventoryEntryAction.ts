/** @format */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * the interface for an action that deletes an item from inventory in the application state
 */
export interface IDeleteInventoryEntryAction {
  type: `DELETE_INVENTORY_ENTRY`
  payload: IIMPProduct
}
