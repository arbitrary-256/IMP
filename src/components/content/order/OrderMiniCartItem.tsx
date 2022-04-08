/** @format */
import { Card } from '@mui/material'
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberChanger } from '../../shared/NumberChanger'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
 * an item in the minicart view
 * @returns a React.FC that displays a small version of the cart
 */
export const OrderMiniCartItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  return (
    <Card key={`MiniCart${product.name.text}`} className={`MiniCartItem`}>
      {ImageDisplayer(product.image)}
      {StringDisplayer(product.name)}
      {NumberChanger({ number: product.inCart, product: product })}
      <p>{`Total Price: ${product.price.prefix}${(product.price.value * product.inCart.value).toFixed(2)}`}</p>
    </Card>
  )
}
