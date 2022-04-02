/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { connection } from './connection'
export const holdThis = async (product: IIMPProduct): Promise<void> => {
  await connection.query(`INSERT INTO products (id, upc, name, description, purchasePrice, salePrice, minQuantity, maxQuantity, quantityInInventory, quantityInCart, image) VALUES (
        (SELECT MAX(id) FROM products) + 1,
        '${product.upc.currentValue}',
        '${product.name.text}',
        '${product.salePrice.currentValue}',
        '${product.minQuantity.currentValue}',
        '${product.maxQuantity.currentValue}',
        '${product.quantityInCart.currentValue}',
        '${product.quantityInInventory.currentValue}',
        '${product.image}'
    )`)
  connection.end()
}
