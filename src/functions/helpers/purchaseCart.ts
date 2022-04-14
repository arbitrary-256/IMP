/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
// import { updateDatabaseEntry } from '../database/updateDatabaseEntry'
/**
 * purchases the items in the cart
 * @param state newState
 * @returns void
 */
export const purchaseCart: Function = (state: IIMPState): IIMPState => {
  let newState: IIMPState = { ...state }
  // TODO: update database entries
  // map through cart and make database calls to update inStock values for entries with matching UPCs
  // cart.map( async (productInCart): Promise<void> => {
  //   updateDatabaseEntry(productInCart)
  // })
  newState.inStock.forEach((product: IIMPProduct) => {
    product.inStock.value = product.inStock.value - product.inCart.value
    product.inCart.value = 0
  })
  newState.stateFuture = []
  newState.stateHistory = []
  return newState
}
