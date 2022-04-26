/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductStringToChange } from '../../interfaces/productProperties/IIMPProductStringToChange'
/**
 * changes the string in a product to a value typed in by the user
 * @param toChange { string, an IIMPString, value, a string primitive, and product, an IIMPProduct }
 * @returns the updated product
 */
export const setString: Function = (toChange: IIMPProductStringToChange): IIMPProduct => {
  return {
    ...toChange.product,
    [toChange.string.id]: { ...toChange.string, text: toChange.newValue }
  }
}
