/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { userConnection } from './userConnection'
export const compareDatabaseToState = async (current: IIMPProduct[], last: IIMPProduct[]): Promise<void> => {
  const localChanges = current.filter((product) => !last.find((lastProduct) => lastProduct.upc === product.upc))
  // request the differences between the database and the local changes from connection
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const remoteChanges = await userConnection.query(`SELECT * FROM products WHERE id IN (${localChanges.map((product) => product.upc).join(',')})`)
  // connection.end()
}
