/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Button, Card, Grid } from '@mui/material'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
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
  return (
    <Grid item key={`ProductInCart${product.upc.currentValue}`}>
      <Card className={`CartGridItem`}>
        <p>{ImageDisplayer(product.image)}</p>
        <p>{NumberChanger(product.quantityInCart)}</p>
        <p>{StringDisplayer(product.name)}</p>
        <p>{NumberDisplayer(product.upc)}</p>
        <p>{NumberDisplayer(product.salePrice)}</p>
        <p>{`Total Price: ${product.salePrice.prefix}${(product.salePrice.currentValue * product.quantityInCart.currentValue).toFixed(2)}`}</p>
        <p />
        <Button
          variant={`contained`}
          onClick={() => {
            dispatch({
              type: `SET_NUMBER`,
              payload: { ...product.quantityInCart, currentValue: 0 }
            })
          }}
        >
          Remove from Cart
        </Button>
      </Card>
    </Grid>
  )
}
