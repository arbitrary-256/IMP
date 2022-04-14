/** @format */
// interfaces
import { IIMPProduct } from '../../IIMPProduct'
/**
 * the interface for an action that makes an invetory row editable
 */
export interface IEditInventoryEntryAction {
  type: `EDIT_INVENTORY`
  payload: IIMPProduct
}
