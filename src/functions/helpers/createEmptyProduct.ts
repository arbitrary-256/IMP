/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { createImpImage } from './createImpImage'
/**
 * Module 2.2.2.4
 * creates an empty product row for the React Context
 * @returns a product row with all values set to default
 */
export const createEmptyProduct: Function = (): IIMPProduct => {
  return {
    editingMode: false,
    upc: {
      propertyName: `UPC`,
      id: `UPC`,
      value: 987654321000,
      min: 0,
      max: 999999999999
    },
    name: {
      id: `Product Name`,
      text: `Empty Product`
    },
    image: createImpImage(),
    cost: { id: `Purchase Price`, propertyName: `cost`, value: 9.99, min: 0.01, max: 99999.99 },
    price: { id: `Sale Price`, propertyName: `price`, value: 99999.99, min: 0.01, max: 99999.99 },
    min: { id: `Minimum Quantity`, propertyName: `min`, value: 0, min: 0, max: 999999 },
    inStock: { id: `In Stock`, propertyName: `inStock`, value: 0, min: 1, max: 999999 },
    max: { id: `Maximum Quantity`, propertyName: `max`, value: 999999, min: 0, max: 999999 },
    inCart: { id: `In Cart`, propertyName: `inCart`, value: 0, min: 0, max: 999999 },
    toReceive: { id: `To Receive`, propertyName: `toReceive`, value: 0, min: 0, max: 999999 }
  }
}
