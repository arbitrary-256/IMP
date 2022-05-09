/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * Module 2.1.4.6.4
 * an action interface for restocking an array of inventory items
 */
export interface IRestockInventoryEntryAction {
  type: `RESTOCK_INVENTORY`
  payload: {
    inventory: IIMPProduct[]
    productsToBeRestocked: IIMPProduct[]
  }
}
