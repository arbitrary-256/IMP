/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { findProductInArray } from '../helpers/findProductInArray'
export const refreshCartStatus: Function = (product: IIMPProduct, cart: IIMPProduct[]): IIMPProduct[] => {
  let newCart: IIMPProduct[] = cart
  const foundIndex = findProductInArray(product, newCart)
  const shouldAddToCart: boolean = product.quantityInCart.currentValue >= 0 && foundIndex === -1
  const shouldRemoveFromCart: boolean = product.quantityInCart.currentValue <= 0 && foundIndex !== -1
  if (shouldAddToCart) {
    newCart.push(product)
  }
  if (shouldRemoveFromCart) {
    newCart = newCart.filter((item) => item.upc.currentValue !== product.upc.currentValue)
  }
  if (!shouldAddToCart && !shouldRemoveFromCart && foundIndex !== -1) {
    newCart[foundIndex].quantityInCart.currentValue = product.quantityInCart.currentValue
  }
  return newCart
}
