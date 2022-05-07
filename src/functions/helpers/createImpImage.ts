/** @format */
/* interfaces */
import { IIMPImage } from '../../interfaces/IIMPImage'
/* non-TypeScript data */
import imp from '../../images/imp.png'
/**
 * mocks an image for a product without using the database
 * @returns an IIMPImage object with the imp logo
 */
export const createImpImage: Function = (): IIMPImage => {
  return { data: imp, altText: `imp` }
}
