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
 * an item in the restock tab
 * @param product the IIMPProduct to be displayed
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
    <Grid item className={`RestockItem`} key={product.upc.value}>
      <Card>
        {StringDisplayer(product.name)}
        {ImageDisplayer(product.image)}
        {NumberDisplayer(product.upc)}
        {NumberDisplayer(product.onHand)}
        {NumberDisplayer(product.min)}
        {NumberDisplayer(product.max)}
        <p />
        <Button
          size={`large`}
          variant={`contained`}
          onClick={() => {
            dispatch({
              type: `RESTOCK_INVENTORY`,
              payload: { inventory: state.inStock, productsToBeRestocked: [product] }
            })
          }}
        >
          Restock {product.max.value - product.onHand.value} units
        </Button>
      </Card>
    </Grid>
  )
}
