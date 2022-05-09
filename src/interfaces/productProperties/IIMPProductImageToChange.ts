/** @format */
/* interfaces */
import { IIMPImage } from '../IIMPImage'
import { IIMPProduct } from '../IIMPProduct'
/**
 * 2.1.1.7.	Image Change Designator
 * Facilitates image change by packaging data identifying both image and parent product to be changed, avoiding unnecessary array traversal by image change helper function.
 */
export interface IIMPProductImageToChange {
  image: IIMPImage
  product: IIMPProduct
  inventoryIndex?: number
}
