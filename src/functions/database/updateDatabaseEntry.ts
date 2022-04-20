/** @format */
import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
import { userConnection } from './userConnection'
/**
 * updates a database entry for a given product
 * @param product the product to update in the database
 * @returns a promise that resolves when the product is updated in the database
 */
export const updateDatabaseEntry = async (product: IIMPDatabaseRow): Promise<void> => {
  await userConnection.query(`UPDATE products SET
        upc = '${product.upcValue}',
        name = '${product.nameText}',
        cost = '${product.costValue}',
        salePrice = '${product.priceValue}',
        min = '${product.minValue}',
        max = '${product.maxValue}',
        inStock = '${product.inStockValue}',
        image = '${product.imageData}'
    WHERE id = ${product.upcValue}`)
  userConnection.end()
}
