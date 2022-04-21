/** @format */
// interfaces
/**
 * the interface for a product stored in the database
 * @param upc the UPC of the product
 * @param name the product's human-readable name
 * @param price the product's price in $USD
 * @param inStock the product's current quantity in stock
 * @param min the minimum quantity in stock before the product should be ordered
 * @param max the maximum quantity to be kept in inventory
 * @param image the product's image
 * @param size OPTIONAL the product's size, if it has one
 */
export interface IIMPDatabaseRow {
  upcValue: number // upc.value
  nameText: string // name.text
  costValue: number // cost.value
  priceValue: number // price.value
  inStockMin: number // inStock.min
  inStockValue: number // inStock.value
  inStockMax: number // inStock.max
  minValue: number // min.value
  maxValue: number // max.value
  imageData: string // image.data
  imageText: string // image.altText
}
