/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { userConnection } from './userConnection'
/**
 * issues a query to the database
 * @param query the query to run against the database
 * @returns a promise that resolves to an array of products
 */
export const getDatabaseInventory = async (query: string): Promise<IIMPProduct[]> => {
  const [rows] = await userConnection.query(query)
  userConnection.end()
  // TODO: add a check to see if the query returned anything
  // TODO: convert anything returned into IIMPPRoduct[]
  // TODO: resolve promise
  return rows
}
