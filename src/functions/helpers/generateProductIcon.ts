/** @format */
import { IIMPImage } from '../../interfaces/IIMPImage'
import impLady from '../../images/imp.png'
export const generateProductIcon: Function = (): IIMPImage => {
  return {
    parentUpc: -1,
    data: impLady,
    altText: ``
  }
}
