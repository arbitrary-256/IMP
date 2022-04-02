/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
export const determinePrimitiveParent: Function = (thingToLocate: number, state: IIMPState): number => {
  const matchingProduct: number = state.currentInventory.findIndex((product: IIMPProduct): boolean => product.upc.currentValue === thingToLocate)
  return matchingProduct
}
