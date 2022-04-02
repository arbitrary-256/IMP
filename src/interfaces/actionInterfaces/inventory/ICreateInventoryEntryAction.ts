/** @format */
import { IIMPProduct } from '../../IIMPProduct'
export interface ICreateInventoryEntryAction {
  type: `CREATE_INVENTORY_ENTRY`
  payload: IIMPProduct
}
