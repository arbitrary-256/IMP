/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Card } from '@mui/material'
// interfaces
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// custom components
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
 * an item in the minicart view
 * @returns a React.FC that displays a small version of the cart
 */
export const OrderMiniCartItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const itemTotal: IIMPNumber = {
    id: `Item Total`,
    propertyName: `Item Total`,
    value: parseFloat((product.price.value * product.inCart.value).toFixed(2)),
    min: 0,
    max: 0
  }
  return (
    <>
      <Card
        key={`MiniCart${product.name.text}`}
        className={`MiniCartItem`}>
        {ImageDisplayer(product.image)}
        <p />
        {StringDisplayer(product.name)}
        <p />
        {NumberChanger({ number: product.inCart, product: product })}
        <p />
        {NumberDisplayer(itemTotal)}
      </Card>
      <p />
    </>
  )
}
