/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * increments a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const incrementNumber: Function = (toChange: IIMPProductNumberToChange): IIMPProduct => {
  let tempProductNumber: IIMPProductNumberToChange = { ...toChange }
  const isMaxOrLess: boolean = tempProductNumber.number.value <= tempProductNumber.number.max
  const isPrice: boolean = tempProductNumber.number.propertyName.toString().includes(`price`) || tempProductNumber.number.propertyName.toString().includes(`cost`)
  !isMaxOrLess ? (tempProductNumber.number.value = tempProductNumber.number.max) : void 0
  isPrice && isMaxOrLess ? (tempProductNumber.number.value += 0.01) : void 0
  isPrice ? (tempProductNumber.number.value = parseFloat(tempProductNumber.number.value.toFixed(2))) : void 0
  !isPrice && isMaxOrLess ? tempProductNumber.number.value++ : void 0
  console.log(tempProductNumber.number.value)
  return {
    ...toChange.product,
    [tempProductNumber.number.propertyName]: tempProductNumber.number
  }
}
