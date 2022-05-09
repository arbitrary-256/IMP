/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Button, Card } from '@mui/material'
/* interfaces */
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
/* react context */
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
 * an item in the cart tab
 * 
 * satisfies Requirements 8.1, 8.2, 8.3.
 * 
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays a single item in the Cart tab of the UI
 */
export const CartGridItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    dispatch
  }: {
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const itemTotal: IIMPNumber = {
    id: `Item Total`,
    propertyName: `Item Total`,
    value: parseFloat((product.price.value * product.inCart.value).toFixed(2)),
    min: 0,
    max: 0
  }
  return (
    <Card>
      <p />
      {ImageDisplayer(product.image)}
      <p />
      {NumberChanger({ number: product.inCart, product: product })}
      <p />
      {StringDisplayer(product.name)}
      <p />
      {NumberDisplayer(product.upc)}
      <p />
      {NumberDisplayer(product.price)}
      <p />
      {NumberDisplayer(itemTotal)}
      <p />
      <Button
        variant={`contained`}
        size={`large`}
        color={`error`}
        onClick={() => {
          dispatch({
            type: `SET_NUMBER`,
            payload: { number: { ...product.inCart, value: 0 }, product: product }
          })
        }}>
        Remove from Cart
      </Button>
    </Card>
  )
}
