/** @format */
/* interfaces */
import { IIMPProduct } from '../interfaces/IIMPProduct'
/* helper functions */
import { mockProduct } from './mockProduct'
/**
 * mocks an entire inventory of products
 * @param numberOfProducts the number of products to be generated, defaulting to 5
 * @returns an array of mocked products with a length equal to numberOfProducts
 */
export const mockInventory: Function = (numberOfProducts: number = 5): IIMPProduct[] => {
  const tempInventory: IIMPProduct[] = []
  for (let i = 0; i < numberOfProducts; i++) {
    tempInventory.push(mockProduct())
  }
  return tempInventory
}
