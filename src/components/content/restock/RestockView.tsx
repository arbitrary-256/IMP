/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Box, Button, Grid } from '@mui/material'
// interfaces
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
// custom components
import { RestockItem } from './RestockItem'
import { SearchRestock } from './SearchRestock'
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
      return product.inStock.value < product.min.value
    })
    .filter((eachProduct: IIMPProduct) => {
      return eachProduct.upc.value.toString().includes(state.restockSearch.toLowerCase()) || eachProduct.name.text.toLowerCase().includes(state.restockSearch.toLowerCase())
    })
  return (
    <Box
      className={`Restock`}
      sx={{ display: state.contentAreaView === `Restock` ? `block` : `none` }}>
      {SearchRestock({})}
      <p />
      <Button
        size={`large`}
        variant={`contained`}
        color={`success`}
        onClick={() => {
          dispatch({
            type: `RESTOCK_INVENTORY`,
            payload: { inventory: state.inStock, productsToBeRestocked: productsToRestock }
          })
        }}>
        Restock All Products
      </Button>
      <p />
      <Grid
        container
        spacing={2}>
        {productsToRestock.map((eachProduct: IIMPProduct) => {
          return (
            <Grid
              item
              className={`OrderGridItem`}
              key={eachProduct.upc.value}>
              {RestockItem(eachProduct)}
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
