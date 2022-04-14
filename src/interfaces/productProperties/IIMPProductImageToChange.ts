/** @format */
// interfaces
import { IIMPImage } from '../IIMPImage'
import { IIMPProduct } from '../IIMPProduct'
export interface IIMPProductImageToChange {
  image: IIMPImage
  product: IIMPProduct
  inventoryIndex?: number
}
