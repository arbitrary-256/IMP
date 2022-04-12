/** @format */
// interfaces
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPProductImageToChange } from '../../interfaces/productProperties/IIMPProductImageToChange'
// non-TypeScript data
import imp from '../../images/imp.png'
/**
 * decrements a number in a product
 * @param toChange the IIMPProductNumber to change
 * @returns the updated product
 */
export const updateImage: Function = (toChange: IIMPProductImageToChange, images: File[]): IIMPProduct => {
  console.log(`updateImage called with file named ${images[0].name}`)
  let tempProduct: IIMPProduct = { ...toChange.product }
  toChange.image.data ? void 0 : (toChange.image.data = imp)
  toChange.image.altText ? void 0 : (toChange.image.altText = `placeholder alt text`)
  const imageValue: string = images[0] as unknown as string
  const imageName: string = images[0].name
  tempProduct.image.data = imageValue
  tempProduct.image.altText = imageName
  return tempProduct
}
