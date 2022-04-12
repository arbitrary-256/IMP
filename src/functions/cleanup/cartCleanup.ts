/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * generates a new cart based on inventory with items inCart.value > 0
 * @param inventory the array of products in the cart
 * @returns a new array of products
 */
export const cartCleanup: Function = (inventory: IIMPProduct[]): IIMPProduct[] => {
  return inventory.filter((productInInventory) => productInInventory.inCart.value > 0)
}
