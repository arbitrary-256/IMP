/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
/**
 * updates a database entry for a given product
 * @param product the product to update in the database
 * @returns a promise that resolves when the product is updated in the database
 */
export const updateDatabaseEntry = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`UPDATE products SET
        upc = '${product.upc.value}',
        name = '${product.name.text}',
        cost = '${product.cost.value}',
        salePrice = '${product.price.value}',
        min = '${product.min.value}',
        max = '${product.max.value}',
        onHand = '${product.onHand.value}',
        inCart = '${product.inCart.value}',
        image = '${product.image}'
    WHERE id = ${product.upc.value}`)
  connection.end()
}
