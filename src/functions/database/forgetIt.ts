/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
export const forgetIt = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`DELETE FROM products WHERE id = ${product.upc}`)
  connection.end()
}
