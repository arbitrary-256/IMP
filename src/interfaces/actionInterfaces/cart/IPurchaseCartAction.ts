/** @format */
/* interfaces */
import { IIMPProduct } from '../../IIMPProduct'
/**
 * Module 2.1.4.3
 * an action interface for purchasing the contents of the cart
 */
export interface IPurchaseCartAction {
  type: `PURCHASE_CART`
  payload: IIMPProduct[]
}
