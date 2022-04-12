/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * updates every product.onHand.value in the IIMPProduct[] to the product.max.value
 * @param productsToBeRestocked an IIMPProduct[] of products with onHand.value <= min.value
 */
export const restockProducts: Function = (inventory: IIMPProduct[], productsToBeRestocked: IIMPProduct[]): IIMPProduct[] => {
  let productsToUpdate: IIMPProduct[] = productsToBeRestocked
  productsToUpdate.map((productToRestock: IIMPProduct) => (productToRestock.onHand.value = productToRestock.max.value))
  return inventory.map((product: IIMPProduct) => {
    let productToRestock: IIMPProduct | undefined = productsToUpdate.find((productToCheck: IIMPProduct): boolean => productToCheck.upc.value === product.upc.value)
    if (productToRestock) {
      return productToRestock
    } else {
      return product
    }
  })
}
