/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Box, Grid, Paper } from '@mui/material'
// interfaces
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
// custom components
import { OrderGridItem } from './OrderGridItem'
/**
 * the order tab's left div that displays the products available to sell
 * @returns a React.FC that displays the products available to sell
 */
export const OrderGrid: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  const filteredOrder: IIMPProduct[] = state.inStock.filter((eachProduct: IIMPProduct) => {
    return eachProduct.upc.value.toString().includes(state.orderSearch.toLowerCase()) || eachProduct.name.text.toLowerCase().includes(state.orderSearch.toLowerCase())
  })
  return (
    <Box className={`OrderGrid`}>
      <Paper>
        <p />
        <Grid container spacing={2}>
          {filteredOrder.map((eachProduct: IIMPProduct) => (
            <Grid item className={`OrderGridItem`} key={eachProduct.upc.value}>
              {OrderGridItem(eachProduct)}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  )
}
