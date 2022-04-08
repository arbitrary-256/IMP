/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * decrements a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const decrementNumber: Function = (toChange: IIMPProductNumberToChange): IIMPProduct => {
  const isMoreThanMin: boolean = toChange.number.value > toChange.number.min
  const isPrice: boolean = toChange.number.id.toString().endsWith(`Price`)
  !isMoreThanMin ? (toChange.number.value = toChange.number.min) : void 0
  isPrice && isMoreThanMin ? (toChange.number.value -= 0.01) : void 0
  isPrice ? parseFloat(toChange.number.value.toFixed(2)) : void 0
  !isPrice && isMoreThanMin ? toChange.number.value-- : void 0
  return {
    ...toChange.product,
    [toChange.number.propertyName]: toChange.number
  }
}
