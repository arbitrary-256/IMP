/** @format */
import { ISize } from '../unionTypes/ISize'
/**
 * the interface for a product in the database
 * @param upc the UPC ofthe product
 * @param name the product's human-readable name
 * @param price the product's price in $USD
 * @param inStock the product's current quantity in stock
 * @param min the minimum quantity in stock before the product should be ordered
 * @param max the maximum quantity to be kept in inventory
 * @param image the product's image
 * @param size OPTIONAL the product's size, if it has one
 */
export interface IDatabaseEntry {
  namePrefix: string // name.prefix
  nameText: string // name.text
  nameSuffix: string // name.suffix
  upcMin: number // upc.min
  upcPrefix: string // upc.prefix
  upcValue: number // upc.value
  upcSuffix: string // upc.suffix
  upcMax: number // upc.max
  costMin: number // cost.min
  costPrefix: string // cost.prefix
  costValue: number // cost.value
  costSuffix: string // cost.suffix
  costMax: number // cost.max
  priceMin: number // price.min
  pricePrefix: string // price.prefix
  priceValue: number // price.value
  priceSuffix: string // price.suffix
  priceMax: number // price.max
  inStockMin: number // inStock.min
  inStockPrefix: string // inStock.prefix
  inStockValue: number // inStock.value
  inStockSuffix: string // inStock.suffix
  inStockMax: number // inStock.max
  minMin: number // min.min
  minPrefix: string // min.prefix
  minValue: number // min.value
  minSuffix: string // min.suffix
  minMax: number // min.max
  maxMin: number // max.min
  maxPrefix: string // max.prefix
  maxValue: number // max.value
  maxSuffix: string // max.suffix
  maxMax: number // max.max
  imageData: string // image.data
  imageText: string // image.altText
  size: ISize | null
}
