/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { rootConnection } from './connection'
/**
 * deletes a database entry for a given product
 * @param product the product to delete from the database
 * @returns a promise that resolves when the product is deleted from the database
 */
export const deleteDatabaseEntry = async (product: IIMPProduct): Promise<void> => {
  await rootConnection.query(`DELETE FROM products WHERE id = ${product.upc}`)
  rootConnection.end()
}
