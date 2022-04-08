/** @format */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * an action interface for restocking an array of inventory items
 */
export interface IRestockInventoryEntryAction {
  type: `RESTOCK_INVENTORY`
  payload: {
    inventory: IIMPProduct[]
    productsToBeRestocked: IIMPProduct[]
  }
}
