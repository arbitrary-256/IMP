/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
/* import { updateDatabaseEntry } from '../database/updateDatabaseEntry'
/**
 * Module 2.2.2.14
 * purchases the items in the cart
 * @param state newState
 * @returns void
 */
export const purchaseCart: Function = (state: IIMPState): IIMPState => {
  let newState: IIMPState = { ...state }
  newState.inStock.forEach((product: IIMPProduct) => {
    product.inStock.value = product.inStock.value - product.inCart.value
    product.inCart.value = 0
  })
  return newState
}
