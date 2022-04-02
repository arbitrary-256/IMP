/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
export const howsEverything = async (query: string): Promise<IIMPProduct[]> => {
  const [rows] = await connection.query(query)
  connection.end()
  return rows
}
