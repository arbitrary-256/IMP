/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Grid, Paper } from '@mui/material'
/* interfaces */
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/* react context */
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { OrderGridItem } from './OrderGridItem'
/**
 * 1.7.2.1.	Order Grid Module
 */
/**
 * the order tab's left div that displays the products available to sell
 * @returns a React.FC that displays the products available to sell
 */
export const OrderGrid: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  const filteredOrder: IIMPProduct[] = state.inStock.filter((eachProduct: IIMPProduct) => {
    return eachProduct.upc.value.toString().includes(state.orderSearch.toLowerCase()) || eachProduct.name.text.toLowerCase().includes(state.orderSearch.toLowerCase())
  })
  return (
    <Box className={`OrderGrid`}>
      <Paper>
        <p />
        <Grid
          container
          spacing={2}>
          {filteredOrder.map((eachProduct: IIMPProduct) => (
            <Grid
              item
              className={`OrderGridItem`}
              key={eachProduct.upc.value}>
              {OrderGridItem(eachProduct)}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  )
}
