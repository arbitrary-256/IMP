/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * filters the array of products by matching a searchString against the product's name or upc
 * @param searchString the string to search for
 * @param products the products to search
 * @returns an array of products that match the search string
 */
export const filterSearchResults: Function = (searchString: string, products: IIMPProduct[]): IIMPProduct[] =>
  products.filter((product: IIMPProduct): boolean => product.upc.value.toString().includes(searchString.toLowerCase()) || product.name.text.toLowerCase().includes(searchString.toLowerCase()))
