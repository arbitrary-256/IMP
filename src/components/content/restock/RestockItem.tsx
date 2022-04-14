/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Button, Card, Grid } from '@mui/material'
// interfaces
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
// custom components
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
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
        <p />
        {StringDisplayer(product.name)}
        <p />
        {ImageDisplayer(product.image)}
        <p />
        {NumberDisplayer(product.upc)}
        <p />
        {NumberDisplayer(product.inStock)}
        <p />
        {NumberDisplayer(product.min)}
        <p />
        {NumberDisplayer(product.max)}
        <p />
        <Button
          size={`large`}
          variant={`contained`}
          color={`success`}
          onClick={() => {
            dispatch({
              type: `RESTOCK_INVENTORY`,
              payload: { inventory: state.inStock, productsToBeRestocked: [product] }
            })
          }}
        >
          Restock {product.max.value - product.inStock.value} units
        </Button>
      </Card>
    </Grid>
  )
}
