/** @format */
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Button, Card, CardMedia } from '@mui/material'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
/**
 * an item in the order tab's main view
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays one product available to sell
 */
export const OrderGridItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Card>
      <CardMedia>
        {ImageDisplayer(product.image)}
        <p>{`${product.name.text}`}</p>
      </CardMedia>
      <p>{`Price: ${product.price.prefix}${product.price.value}`}</p>
      <p>{` ${product.onHand.value - product.inCart.value} available `}</p>
      <Button
        key={`AddToCartButton${product.upc.value}`}
        variant={`contained`}
        disabled={product.onHand.value - product.inCart.value <= 0 ? true : false}
        onClick={() => {
          if (product.inCart.value < product.onHand.value) {
            dispatch({
              type: `INCREMENT_NUMBER`,
              payload: { number: product.inCart, product: product }
            })
          }
        }}
      >
        Add to Cart
      </Button>
    </Card>
  )
}
