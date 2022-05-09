/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * Module 2.2.2.17
 * updates every product.inStock.value in the IIMPProduct[] to the product.max.value
 * @param productsToBeRestocked an IIMPProduct[] of products with inStock.value <= min.value
 */
export const restockProducts: Function = (inventory: IIMPProduct[], productsToBeRestocked: IIMPProduct[]): IIMPProduct[] => {
  let productsToUpdate: IIMPProduct[] = productsToBeRestocked
  productsToUpdate.map((productToRestock: IIMPProduct) => (productToRestock.inStock.value = productToRestock.max.value))
  return inventory.map((product: IIMPProduct) => {
    let productToRestock: IIMPProduct | undefined = productsToUpdate.find((productToCheck: IIMPProduct): boolean => productToCheck.upc.value === product.upc.value)
    if (productToRestock) {
      return productToRestock
    } else {
      return product
    }
  })
}
