/** @format */
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Button, Card, CardMedia, Stack } from '@mui/material'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPString } from '../../../interfaces/IIMPString'
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
  const numberAvailable: IIMPNumber = {
    id: `Available`,
    propertyName: `Available`,
    value: product.onHand.value - product.inCart.value,
    prefix: ``,
    min: 0,
    max: 0,
    suffix: ``
  }
  const outOfStock: IIMPString = {
    id: `Out of Stock`,
    prefix: ``,
    text: `Out of Stock`,
    suffix: ``
  }
  return (
    <Card>
      <CardMedia>{ImageDisplayer(product.image)}</CardMedia>
      <Stack direction={`column`} spacing={2}>
        {StringDisplayer(product.name)}
        {NumberDisplayer(product.price)}
        {numberAvailable.value > 0 ? NumberDisplayer(numberAvailable) : StringDisplayer(outOfStock)}
      </Stack>
      <Button
        key={`AddToCartButton${product.upc.value}`}
        variant={`contained`}
        size={`large`}
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
