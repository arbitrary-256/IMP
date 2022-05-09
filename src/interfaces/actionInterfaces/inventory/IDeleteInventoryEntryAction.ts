/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * Module 2.1.4.6.1
 * the interface for an action that deletes an item from inventory in the application state
 */
export interface IDeleteInventoryEntryAction {
  type: `DELETE_INVENTORY`
  payload: IIMPProduct
}
