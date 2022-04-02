/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
export const whatsNew = async (current: IIMPProduct[], last: IIMPProduct[]): Promise<void> => {
  const localChanges = current.filter((product) => !last.find((lastProduct) => lastProduct.upc === product.upc))
  // request the differences between the database and the local changes from connection
  const remoteChanges = await connection.query(`SELECT * FROM products WHERE id IN (${localChanges.map((product) => product.upc).join(',')})`)
  console.log(remoteChanges)
  /* const submitDifference: Function = () =>
    difference.map((product) => {
      const thisQuery = `INSERT INTO products (id, name, price, quantity, description, image) VALUES ('${product.upc}', '${product.name}', '${product.salePrice}', '${product.purchasePrice}', '${product.quantityInInventory}', '${product.minQuantity}', '${product.maxQuantity}', '${product.image}')`
      connection.query(thisQuery)
      return void 0
    })
  await submitDifference()
  connection.end() */
}
