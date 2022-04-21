/** @format */
import { connectAsUser } from './connectAsUser'
import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
/**
 * issues a query to the database
 * @param searchString the product to search for in the database
 * @returns a promise that resolves to an array of products
 */
export const searchTable = async (searchString: string): Promise<IIMPDatabaseRow[]> => {
  const searchTableResult: IIMPDatabaseRow[] = await connectAsUser.query(`SELECT * FROM products WHERE ${searchString}`)
  console.log(searchTableResult)
  connectAsUser.end()
  // TODO: see if the query returned anything
  // TODO: resolve promise
  return searchTableResult
}
