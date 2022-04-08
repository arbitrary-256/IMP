/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
/**
 * creates a database entry for a given product
 * @param product the product to create in the database
 * @returns a promise that resolves when the product is created in the database
 */
export const createDatabaseEntry = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`INSERT INTO products (id, upc, name, description, cost, salePrice, min, max, onHand, inCart, image) VALUES (
        (SELECT MAX(id) FROM products) + 1,
        '${product.upc.value}',
        '${product.name.text}',
        '${product.price.value}',
        '${product.min.value}',
        '${product.max.value}',
        '${product.inCart.value}',
        '${product.onHand.value}',
        '${product.image}'
    )`)
  connection.end()
}
