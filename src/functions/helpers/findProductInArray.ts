/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * finds a given product in an array of products
 * @param product the product to find in the array
 * @param searchArray the array to search in
 * @returns boolean foundProduct if it found it, and number foundIndex if it found it
 */
export const findProductInArray: Function = (product: IIMPProduct, searchArray: IIMPProduct[]): number => {
  const foundIndex: number | null = searchArray.findIndex((item) => item.upc.currentValue === product.upc.currentValue)
  return foundIndex
}
