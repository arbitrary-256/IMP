/** @format */
import { Card } from '@mui/material'
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberChanger } from '../../shared/NumberChanger'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
 * @returns a React.FC that displays a small version of the cart
 */
export const MiniCartItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  return (
    <Card key={`MiniCart${product.name.text}`} className={`MiniCartItem`}>
      <p>{ImageDisplayer(product.image)}</p>
      <p>{StringDisplayer(product.name)}</p>
      <p>{NumberChanger(product.quantityInCart)}</p>
      <p>{`Total Price: ${product.salePrice.prefix}${(product.salePrice.currentValue * product.quantityInCart.currentValue).toFixed(2)}`}</p>
    </Card>
  )
}
