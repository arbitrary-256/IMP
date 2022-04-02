/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
export const changeThis = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`UPDATE products SET
        upc = '${product.upc.currentValue}',
        name = '${product.name.text}',
        purchasePrice = '${product.purchasePrice.currentValue}',
        salePrice = '${product.salePrice.currentValue}',
        minQuantity = '${product.minQuantity.currentValue}',
        maxQuantity = '${product.maxQuantity.currentValue}',
        quantityInInventory = '${product.quantityInInventory.currentValue}',
        quantityInCart = '${product.quantityInCart.currentValue}',
        image = '${product.image}'
    WHERE id = ${product.upc.currentValue}`)
  connection.end()
}
