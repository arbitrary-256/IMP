/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * increments a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const incrementNumber: Function = (toChange: IIMPProductNumberToChange): IIMPProduct => {
  const isMaxOrLess: boolean = toChange.number.value <= toChange.number.max
  const isPrice: boolean = toChange.number.id.toString().endsWith(`Price`)
  !isMaxOrLess ? (toChange.number.value = toChange.number.max) : void 0
  isPrice && isMaxOrLess ? (toChange.number.value += 0.01) : void 0
  isPrice ? parseFloat(toChange.number.value.toFixed(2)) : void 0
  !isPrice && isMaxOrLess ? toChange.number.value++ : void 0
  return {
    ...toChange.product,
    [toChange.number.propertyName]: toChange.number
  }
}
