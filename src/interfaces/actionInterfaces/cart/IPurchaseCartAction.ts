/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * an action interface for purchasing the contents of the cart
 */
export interface IPurchaseCartAction {
  type: `PURCHASE_CART`
  payload: IIMPProduct[]
}
