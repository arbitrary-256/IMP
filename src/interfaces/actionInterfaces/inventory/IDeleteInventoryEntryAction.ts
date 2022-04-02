/** @format */
import { IIMPProduct } from '../../IIMPProduct'
export interface IDeleteInventoryEntryAction {
  type: `DELETE_INVENTORY_ENTRY`
  payload: IIMPProduct
}
