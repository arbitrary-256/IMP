/** @format */
import { IIMPProduct } from '../../IIMPProduct'
export interface IRestockInventoryEntryAction {
  type: `RESTOCK_INVENTORY`
  payload: IIMPProduct[]
}
