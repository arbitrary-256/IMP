/** @format */
import { IIMPProduct } from '../../IIMPProduct'
export interface IModifyInventoryEntryAction {
  type: `UPDATE_INVENTORY`
  payload: IIMPProduct
}
