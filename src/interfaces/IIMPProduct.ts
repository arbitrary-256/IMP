/** @format */
import { IIMPImage } from './IIMPImage'
import { IIMPNumber } from './IIMPNumber'
import { IIMPString } from './IIMPString'
import { ISize } from './unionTypes/ISize'
/**
 * the interface for a product in the system
 * @upc the unique product identifier, usually a UPC
 * @name the product's human-readable name
 * @price the product's price in $USD
 * @quantity the product's current quantity in stock
 * @minQuantity the minimum quantity on hand before the product should be ordered
 * @maxQuantity the maximum quantity to be kept in inventory
 * @size (optional) the product's size, if it has one
 * @image (optional) the product's image, if it has one
 */
export interface IIMPProduct {
  upc: IIMPNumber
  name: IIMPString
  purchasePrice: IIMPNumber
  salePrice: IIMPNumber
  quantityInInventory: IIMPNumber
  quantityInCart: IIMPNumber
  quantityToReceive: IIMPNumber
  quantityToRestock: IIMPNumber
  minQuantity: IIMPNumber
  maxQuantity: IIMPNumber
  size: ISize | null
  image: IIMPImage
}
