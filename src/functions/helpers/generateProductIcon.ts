/** @format */
// interfaces
import { IIMPImage } from '../../interfaces/IIMPImage'
// non-TypeScript data
import imp from '../../images/imp.png'
/**
 * generates a default image for a product without using the database
 * @returns an IIMPImage object with the imp logo
 */
export const generateProductIcon: Function = (): IIMPImage => {
  return { data: imp, altText: `imp` }
}
