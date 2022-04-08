/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { RestockItem } from './RestockItem'
import { Button, Grid } from '@mui/material'
/**
 * the restock tab
 * @returns a React.FC that displays the Restock tab of the UI
 */
export const RestockView: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const inStockProducts: IIMPProduct[] = state.inStock
  const productsToRestock: IIMPProduct[] = inStockProducts.filter((product: IIMPProduct): boolean => {
    return product.onHand.value <= product.min.value
  })
  if (state.contentAreaView === `Restock`) {
    return (
      <div className={`Restock`}>
        <Button
          size={`small`}
          variant={`contained`}
          onClick={() => {
            dispatch({
              type: `RESTOCK_INVENTORY`,
              payload: { inventory: state.inStock, productsToBeRestocked: productsToRestock }
            })
          }}
        >
          Restock All Products
        </Button>
        <p />
        <Grid container spacing={2}>
          {productsToRestock.map(RestockItem)}
        </Grid>
        <p />
        <Button
          size={`small`}
          variant={`contained`}
          onClick={() => {
            dispatch({
              type: `RESTOCK_INVENTORY`,
              payload: { inventory: state.inStock, productsToBeRestocked: productsToRestock }
            })
          }}
        >
          Restock All Products
        </Button>
      </div>
    )
  } else {
    return <div className={`Restock`} />
  }
}
