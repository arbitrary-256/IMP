/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Button, Card, CardMedia, Stack } from '@mui/material'
// interfaces
import { IIMPNumber } from '../../../interfaces/IIMPNumber'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { IIMPString } from '../../../interfaces/IIMPString'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
// custom components
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
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
    value: product.inStock.value - product.inCart.value,
    prefix: ``,
    min: 0,
    max: 99999,
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
      <p />
      <Stack
        direction={`column`}
        spacing={2}>
        {StringDisplayer(product.name)}
        {NumberDisplayer(product.price)}
        {numberAvailable.value > 0 ? NumberDisplayer(numberAvailable) : StringDisplayer(outOfStock)}
      </Stack>
      <Button
        key={`AddToCartButton${product.upc.value}`}
        variant={`contained`}
        size={`large`}
        color={`success`}
        disabled={product.inStock.value - product.inCart.value <= 0 ? true : false}
        onClick={() => {
          if (product.inCart.value < product.inStock.value) {
            dispatch({
              type: `INCREMENT_NUMBER`,
              payload: { number: product.inCart, product: product }
            })
          }
        }}>
        Add to Cart
      </Button>
    </Card>
  )
}
