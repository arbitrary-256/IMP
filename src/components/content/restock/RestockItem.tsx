/** @format */
import { Button, Card, Grid } from '@mui/material'
import * as React from 'react'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { StringDisplayer } from '../../shared/StringDisplayer'
/**
 * @product the IIMPProduct to be displayed
 * @returns a React.FC that displays a form to receive a product
 */
export const RestockItem: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Grid item className={`RestockItem`} key={product.upc.currentValue}>
      <Card>
        <p>{StringDisplayer(product.name)}</p>
        <p>{ImageDisplayer(product.image)}</p>
        <p>{NumberDisplayer(product.upc)}</p>
        <p>{NumberDisplayer(product.quantityInInventory)}</p>
        <p>{NumberDisplayer(product.minQuantity)}</p>
        <p>{NumberDisplayer(product.maxQuantity)}</p>
        <p></p>
        <Button
          variant={`contained`}
          onClick={() => {
            dispatch({
              type: `RESTOCK_INVENTORY`,
              payload: [product]
            })
          }}
        >
          Restock {product.maxQuantity.currentValue - product.quantityInInventory.currentValue} units
        </Button>
      </Card>
    </Grid>
  )
}
