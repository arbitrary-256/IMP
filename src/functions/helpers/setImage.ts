/** @format */
/* interfaces */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductImageToChange } from '../../interfaces/productProperties/IIMPProductImageToChange'
/* non-TypeScript data */
/* import imp from '../../images/imp.png'
/**
 * Module 2.2.2.18
 * updates the image for a product
 * @param toChange the IIMPProductImageToChange
 * @returns the updated product
 */
export const setImage: Function = (toChange: IIMPProductImageToChange): IIMPProduct => {
  return { ...toChange.product, image: { data: toChange.image.data, altText: toChange.image.altText } }
}
