/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * adds inventory to the local application state
 * @param product state.productToReceive
 * @param inventory state.inStock
 * @returns a new IIMPProduct[] with the product's inventory added
 */
export const receiveInventory: Function = (product: IIMPProduct, inventory: IIMPProduct[]): IIMPProduct[] => {
  let newInventory: IIMPProduct[] = [...inventory]
  const productFromInventory: IIMPProduct | undefined = newInventory.find((productToFind) => productToFind.upc.value === product.upc.value)
  const inventoryIndex: number = newInventory.findIndex((productToFindIndexOf) => productToFindIndexOf.upc === product.upc)
  if (productFromInventory && inventoryIndex !== -1) {
    // if product is in inventory, add to quantity in inventory
    newInventory[inventoryIndex] = {
      ...productFromInventory,
      inStock: {
        ...productFromInventory.inStock,
        value: productFromInventory.inStock.value + product.toReceive.value
      },
      toReceive: {
        ...productFromInventory.toReceive,
        value: 0
      }
    }
  } else {
    // if product is not in inventory, submit action.payload to inStock
    newInventory.push({ ...product, inStock: { ...product.inStock, value: product.toReceive.value }, toReceive: { ...product.toReceive, value: 0 } })
  }
  // TODO: update inStock in SQL database with holdThis function
  return newInventory
}
