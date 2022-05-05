/** @format */
/* interfaces */
import { IIMPSQLRow } from '../../interfaces/IIMPSQLRow'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * converts a product between database and context
 * @param toContext a product to be stored in context
 * @param toDatabase a product to be stored in the database
 * @returns the converted version of the product passed, or void if a non-0 number of products are passed
 */
export const convertProduct: Function = (toDatabase?: IIMPProduct, toContext?: IIMPSQLRow): IIMPProduct | IIMPSQLRow | void => {
  if (toDatabase && !toContext) {
    return {
      upcValue: toDatabase.upc.value,
      nameText: toDatabase.name.text,
      imageData: toDatabase.image.data,
      imageText: toDatabase.image.altText,
      costValue: toDatabase.cost.value,
      priceValue: toDatabase.price.value,
      inStockValue: toDatabase.inStock.value,
      minValue: toDatabase.min.value,
      maxValue: toDatabase.max.value,
      inStockMin: toDatabase.inStock.min,
      inStockMax: toDatabase.inStock.max
    }
  }
  if (!toDatabase && toContext) {
    return {
      editingMode: false,
      upc: {
        propertyName: `UPC`,
        id: `UPC`,
        value: toContext.upcValue,
        min: 0,
        max: 999999999999
      },
      name: {
        id: `Product Name`,
        text: toContext.nameText
      },
      image: {
        data: toContext.imageData,
        altText: toContext.imageText
      },
      cost: {
        propertyName: `cost`,
        id: `Sale Price`,
        value: toContext.costValue,
        min: 0,
        max: 99999.99
      },
      price: {
        propertyName: `price`,
        id: `Sale Price`,
        value: toContext.priceValue,
        min: 0,
        max: 99999.99
      },
      inStock: {
        propertyName: `inStock`,
        id: `In Stock`,
        value: toContext.inStockValue,
        min: toContext.inStockMin,
        max: toContext.inStockMax
      },
      min: {
        propertyName: `min`,
        id: `Minimum Quantity`,
        value: toContext.minValue,
        min: 0,
        max: 99999
      },
      max: {
        propertyName: `max`,
        id: `Maximum Quantity`,
        value: toContext.maxValue,
        min: 0,
        max: 99999
      },
      inCart: {
        propertyName: `inCart`,
        id: `In Cart`,
        value: 0,
        min: 0,
        max: 99999
      },
      toReceive: {
        propertyName: `toReceive`,
        id: `To Receive`,
        value: 0,
        min: 0,
        max: 99999
      }
    }
  }
  if (toDatabase && toContext) {
    return
  }
  if (!toDatabase && !toContext) {
    return
  }
}
