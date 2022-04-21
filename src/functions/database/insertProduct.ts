/** @format */
import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
import { connectAsRoot } from './connectAsRoot'
/**
 * creates a database entry for a given product
 * @param product the product to create in the database
 * @returns a promise that resolves when the product is created in the database
 */
export const insertProduct = async (product: IIMPDatabaseRow): Promise<void> => {
  const insertProductResult: string =
    await connectAsRoot.query(`INSERT INTO products (upcValue, nameText, costValue, priceValue, minValue, inStockMin, inStockValue, inStockMax, maxValue, imageDate, imageText) VALUES (
        (SELECT MAX(id) FROM products) + 1,
        '${product.upcValue}',
        '${product.nameText}',
        '${product.costValue}',
        '${product.priceValue}',
        '${product.minValue}',
        '${product.inStockMin}',
        '${product.inStockValue}',
        '${product.inStockMax}',
        '${product.maxValue}',
        '${product.imageData}',
        '${product.imageText}',
    )`)
  console.log(insertProductResult)
  connectAsRoot.end()
}
