/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
/**
 * deletes a database entry for a given product
 * @param product the product to delete from the database
 * @returns a promise that resolves when the product is deleted from the database
 */
export const deleteDatabaseEntry = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`DELETE FROM products WHERE id = ${product.upc}`)
  connection.end()
}
