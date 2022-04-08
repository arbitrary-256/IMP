/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { Box, Grid } from '@mui/material'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
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
      <p />
      <Grid container spacing={2}>
        {filteredOrder.map((eachProduct: IIMPProduct) => (
          <Grid item className={`OrderGridItem`} key={eachProduct.upc.value}>
            {OrderGridItem(eachProduct)}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
