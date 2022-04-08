/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { RestockItem } from './RestockItem'
import { SearchRestock } from './SearchRestock'
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
  const productsToRestock: IIMPProduct[] = state.inStock
    .filter((product: IIMPProduct): boolean => {
      return product.onHand.value < product.min.value
    })
    .filter((eachProduct: IIMPProduct) => {
      return eachProduct.upc.value.toString().includes(state.restockSearch.toLowerCase()) || eachProduct.name.text.toLowerCase().includes(state.orderSearch.toLowerCase())
    })
  if (state.contentAreaView === `Restock`) {
    return (
      <div className={`Restock`}>
        {SearchRestock({})}
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
          <p>Restock All Products</p>
        </Button>
        <p />
        <Grid container spacing={2}>
          {productsToRestock.map((eachProduct: IIMPProduct) => {
            return (
              <Grid item className={`OrderGridItem`} key={eachProduct.upc.value}>
                {RestockItem(eachProduct)}
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  } else {
    return <div className={`Restock`} />
  }
}
