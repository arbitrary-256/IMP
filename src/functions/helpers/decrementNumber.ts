/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * decrements a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const decrementNumber: Function = (toChange: IIMPProductNumberToChange): IIMPProduct => {
  let tempProductNumber: IIMPProductNumberToChange = { ...toChange }
  const isMoreThanMin: boolean = tempProductNumber.number.value > tempProductNumber.number.min
  const isPrice: boolean = tempProductNumber.number.propertyName.toString() === `price` || tempProductNumber.number.propertyName.toString() === `cost`
  !isMoreThanMin ? (tempProductNumber.number.value = tempProductNumber.number.min) : void 0
  isPrice && isMoreThanMin ? (tempProductNumber.number.value -= 0.01) : void 0
  isPrice ? (tempProductNumber.number.value = parseFloat(tempProductNumber.number.value.toFixed(2))) : void 0
  !isPrice && isMoreThanMin ? tempProductNumber.number.value-- : void 0
  return {
    ...toChange.product,
    [tempProductNumber.number.propertyName]: tempProductNumber.number
  }
}
