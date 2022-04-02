/** @format */
import { IIMPProduct } from '../../IIMPProduct'
export interface IPurchaseCartAction {
  type: `PURCHASE_CART`
  payload: IIMPProduct[]
}
