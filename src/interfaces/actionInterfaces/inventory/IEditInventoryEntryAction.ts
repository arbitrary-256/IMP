/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * Module 2.1.4.6.2
 * the interface for an action that makes an invetory row editable
 */
export interface IEditInventoryEntryAction {
  type: `EDIT_INVENTORY`
  payload: IIMPProduct
}
