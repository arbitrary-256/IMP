/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/* non-TypeScript data */
/**
 * toggles the editability of a product
 * @param product the product to delete
 * @returns the new anventory Array
 */
export const deleteProduct: Function = (product: IIMPProduct, inventory: IIMPProduct[]): IIMPProduct[] => {
  const index: number = inventory.findIndex((item: IIMPProduct) => item.upc.value === product.upc.value) /* find index of product in inventory */
  return [...inventory.slice(0, index), ...inventory.slice(index + 1)] /* remove product in inventory */
}
