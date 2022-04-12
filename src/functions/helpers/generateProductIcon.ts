/** @format */
// interfaces
import { IIMPImage } from '../../interfaces/IIMPImage'
// non-TypeScript data
import impLady from '../../images/imp.png'
/**
 * generates a default image for a product without using the database
 * @returns an IIMPImage object with the lady imp image
 */
export const generateProductIcon: Function = (): IIMPImage => {
  return {
    data: impLady,
    altText: ``
  }
}
