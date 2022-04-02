/** @format */

import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Button, Card, CardMedia } from '@mui/material'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
/**
 * @product the IIMPProduct to be displayed
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
  const productBeingOrdered: IIMPProduct = {
    ...product,
    quantityInCart: {
      ...product.quantityInCart,
      currentValue: 0,
      minValue: 0,
      maxValue: 9999
    }
  }
  return (
    <div className={`OrderGridItem`}>
      <Card>
        <CardMedia>
          {ImageDisplayer(product.image)}
          <p>{`${productBeingOrdered.name.text}`}</p>
        </CardMedia>
        <p>{`Price: ${productBeingOrdered.salePrice.prefix}${productBeingOrdered.salePrice.currentValue}`}</p>
        <p>{` ${productBeingOrdered.quantityInInventory.currentValue - productBeingOrdered.quantityInCart.currentValue} available `}</p>
        <>
          <Button
            key={`AddToCartButton${productBeingOrdered.upc.currentValue}`}
            variant={`contained`}
            onClick={() => {
              dispatch({
                type: `INCREMENT_NUMBER`,
                payload: productBeingOrdered.quantityInCart
              })
            }}
          >
            Add to Cart
          </Button>
        </>
      </Card>
    </div>
  )
}
