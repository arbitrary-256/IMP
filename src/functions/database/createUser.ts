/** @format */
import { rootConnection } from './rootConnection'
/**
 * creates the database on a fresh MariaDB instance
 * @returns a promise that resolves when the product is created in the database
 */
export const createUser = async (): Promise<void> => {
  await rootConnection.query(`INSERT INTO products (id, upc, name, description, cost, salePrice, min, max, inStock, inCart, image) VALUES ()`)
  rootConnection.end()
}
