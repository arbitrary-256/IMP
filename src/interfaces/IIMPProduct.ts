/** @format */
// interfaces
import { IIMPImage } from './IIMPImage'
import { IIMPNumber } from './IIMPNumber'
import { IIMPString } from './IIMPString'
import { ISize } from './unionTypes/ISize'
/**
 * the interface for a product in the application
 * @param upc the UPC ofthe product
 * @param name the product's human-readable name
 * @param price the product's price in $USD
 * @param inStock the product's current quantity in stock
 * @param min the minimum quantity in stock before the product should be ordered
 * @param max the maximum quantity to be kept in inventory
 * @param image the product's image
 * @param size OPTIONAL the product's size, if it has one
 */
export interface IIMPProduct {
  editingMode: boolean
  name: IIMPString
  upc: IIMPNumber
  cost: IIMPNumber
  price: IIMPNumber
  inStock: IIMPNumber
  inCart: IIMPNumber
  toReceive: IIMPNumber
  min: IIMPNumber
  max: IIMPNumber
  image: IIMPImage
  size?: ISize
}
