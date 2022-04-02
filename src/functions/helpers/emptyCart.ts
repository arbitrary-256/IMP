/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
export const emptyCart: Function = (cart: IIMPProduct[]): void =>
  cart.forEach((product) => {
    while (cart.length > 0) {
      product.quantityInCart.currentValue = 0
      cart.pop()
    }
  })
