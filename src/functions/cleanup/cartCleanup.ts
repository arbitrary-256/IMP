/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
/**
 * checks whether a product should be added to the cart, removed from the cart, or have the number in the cart updated
 * @param product the product to check for changes
 * @param cart the array of products in the cart
 * @returns a new array of products
 */
export const cartCleanup: Function = (product: IIMPProduct, cart: IIMPProduct[]): IIMPProduct[] => {
  let newCart: IIMPProduct[] = cart
  const newProduct: IIMPProduct = product
  const cartIndex: number = newCart.findIndex((productToCompare) => productToCompare.upc.value === newProduct.upc.value)
  cartIndex === -1 ? newCart.push(newProduct) : void 0
  newProduct.inCart.value <= 0 ? (newCart = newCart.filter((productInCart) => productInCart.upc !== newProduct.upc)) : void 0
  cartIndex !== -1 ? (newCart[cartIndex] = newProduct) : void 0
  return newCart
}
