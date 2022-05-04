/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/* non-TypeScript data */
/**
 * toggles the editability of a product
 * @param product the product to make editable or not
 * @returns the new inventory Array
 */
export const editProduct: Function = (product: IIMPProduct, inventory: IIMPProduct[]): IIMPProduct[] => {
  const toggledMode: boolean = !product.editingMode
  const toggledProduct: IIMPProduct = { ...product, editingMode: toggledMode }
  const index: number = inventory.findIndex((item: IIMPProduct) => item.upc.value === product.upc.value) /* find index of product in inventory */
  return [...inventory.slice(0, index), toggledProduct, ...inventory.slice(index + 1)] /* replace product in inventory */
}
