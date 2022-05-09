/** @format */
/* interfaces */
import { IIMPProduct } from '../interfaces/IIMPProduct'
/* helper functions */
import { mockProduct } from './mockProduct'
/**
 * Module 6.2
 * mocks an entire inventory of products
 * @param numberOfProducts the number of products to be generated, defaulting to 5
 * @returns an array of mocked products with a length equal to numberOfProducts
 */
export const mockInventory: Function = (numberOfProducts: number = 5): IIMPProduct[] => {
  const tempInventory: IIMPProduct[] = []
  while (tempInventory.length < numberOfProducts) {
    tempInventory.push(mockProduct())
  }
  return tempInventory
}
