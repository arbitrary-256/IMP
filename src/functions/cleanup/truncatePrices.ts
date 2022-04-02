/** @format */
import { IIMPState } from '../../interfaces/IIMPState'
export const truncatePrices: Function = (state: IIMPState): void => {
  state.currentInventory.forEach((product) => {
    parseFloat(product.purchasePrice.currentValue.toFixed(2))
    parseFloat(product.salePrice.currentValue.toFixed(2))
  })
}
