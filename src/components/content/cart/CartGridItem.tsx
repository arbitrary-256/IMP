/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Button, Card } from '@mui/material'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
/**
 * an item in the cart tab
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays a single item in the Cart tab of the UI
 */
export const CartGridItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const itemTotal: IIMPNumber = {
    id: `Item Total`,
    propertyName: `Item Total`,
    value: parseFloat((product.price.value * product.inCart.value).toFixed(2)),
    prefix: `$`,
    suffix: ``,
    min: 0,
    max: 0
  }
  return (
    <Card>
      <p>{ImageDisplayer(product.image)}</p>
      <p>{NumberChanger({ number: product.inCart, product: product })}</p>
      <p>{StringDisplayer(product.name)}</p>
      <p>{NumberDisplayer(product.upc)}</p>
      <p>{NumberDisplayer(product.price)}</p>
      <p>{NumberDisplayer(itemTotal)}</p>
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
        }}
      >
        Remove from Cart
      </Button>
    </Card>
  )
}
