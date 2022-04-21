/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connectAsUser } from './connectAsUser'
export const compareDatabaseToState = async (current: IIMPProduct[], stateInventory: IIMPProduct[]): Promise<void> => {
  const localChanges = current.filter((product) => !stateInventory.find((lastProduct) => lastProduct.upc === product.upc))
  // request the differences between the database and the local changes from connection
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const remoteChangesResult = await connectAsUser.query(`SELECT * FROM products WHERE id IN (${localChanges.map((product) => product.upc).join(',')})`)
  console.log(remoteChangesResult)
  connectAsUser.end()
}
