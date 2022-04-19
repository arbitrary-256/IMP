/** @format */
// interfaces
import { IIMPNumber } from '../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * changes the number in a product to a value typed in by the user
 * @param payload number, an IIMPNumber, and product, an IIMPProduct
 * @returns the updated product
 */
export const setNumber: Function = (payload: IIMPProductNumberToChange): IIMPProduct => {
  let newProduct: IIMPProduct = { ...payload.product }
  let newNumber: IIMPNumber = { ...payload.number }
  newNumber.value <= 0 || newNumber.value.toString() === `NaN` ? (newNumber.value = 0) : void 0
  const isMoreThanMin: boolean = newNumber.value >= newNumber.min
  const isLessThanMax: boolean = newNumber.value <= newNumber.max
  const isInRange: boolean = isMoreThanMin && isLessThanMax
  if (isInRange) {
    switch (payload.number.id) {
      case `Minimum Quantity`:
        newProduct.min.value = parseInt(newNumber.value.toString())
        break
      case `Maximum Quantity`:
        newProduct.max.value = parseInt(newNumber.value.toString())
        break
      case `Purchase Price`:
        newProduct.cost = { ...newNumber, value: parseFloat(newNumber.value.toFixed(2)) }
        break
      case `Sale Price`:
        newProduct.price = { ...newNumber, value: parseFloat(newNumber.value.toFixed(2)) }
        break
      case `In Stock`:
        newProduct.inStock = { ...newNumber, value: parseInt(newNumber.value.toString()) }
        break
      case `UPC`:
        newProduct.upc = { ...newNumber, value: parseInt(newNumber.value.toString()) }
        break
      case `To Receive`:
        newProduct.toReceive = { ...newNumber, value: parseInt(newNumber.value.toString()) }
        break
      case `In Cart`:
        newProduct.inCart = { ...newNumber, value: parseInt(newNumber.value.toString()) }
        newProduct.inCart.value > newProduct.inStock.value ? (newProduct.inCart.value = parseInt(newProduct.inStock.value.toString())) : void 0
        break
      default:
        console.error(`IMPError: could not find matching product while setting number`)
        break
    }
  }
  return newProduct
}
