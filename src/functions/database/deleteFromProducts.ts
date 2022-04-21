/** @format */
import { connectAsRoot } from './connectAsRoot'
/**
 * deletes a database entry for a given product
 * @param upc the product.upc.value to delete from the database
 * @returns a promise that resolves when the product is deleted from the database
 */
export const deleteFromProducts = async (upc: number): Promise<void> => {
  const deleteProductResult: string = await connectAsRoot.query(`DELETE FROM products WHERE upcValue = ${upc.toString()}`)
  console.log(deleteProductResult)
  connectAsRoot.end()
}
