/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductNumberToChange } from '../../interfaces/productProperties/IIMPProductNumberToChange'
/**
 * increments a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const incrementNumber: Function = (toChange: IIMPProductNumberToChange): IIMPProduct => {
  let mutable: IIMPProductNumberToChange = { ...toChange }
  const isInStock: boolean = mutable.number.propertyName === `inStock`
  const isPrice: boolean = mutable.number.propertyName.toString().includes(`price`) || mutable.number.propertyName.toString().includes(`cost`)
  const isMaxOrLess: boolean = mutable.number.value <= mutable.number.max
  const incrementInStock: Function = (): void => {
    mutable.number.value < mutable.product.max.value && isMaxOrLess && mutable.number.value++
  }
  const incrementPrice: Function = (): void => {
    mutable.number.value = parseFloat(mutable.number.value.toFixed(2))
    isMaxOrLess && parseFloat((mutable.number.value += 0.01).toFixed(2)
    )
  }
  if (isMaxOrLess) {
    !isPrice && !isInStock && mutable.number.value++
    isPrice && incrementPrice(mutable.number.value)
    isInStock && incrementInStock()
  } else {
    mutable.number.value = mutable.number.max
  }
  console.log(mutable.number)
  return {
    ...toChange.product,
    [mutable.number.propertyName]: mutable.number
  }
}
