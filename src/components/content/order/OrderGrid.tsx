/** @format */
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { Card, Grid } from '@mui/material'
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
  return (
    <div className={`OrderGrid`}>
      <Grid container spacing={2}>
        {state.filteredOrder.length === 0 && state.orderSearch.length === 0
          ? state.filteredOrder.map((eachProduct: IIMPProduct) => OrderGridItem(eachProduct))
          : state.inStock.map((eachProduct: IIMPProduct) => OrderGridItem(eachProduct))}
        {state.inStock.map((eachProduct: IIMPProduct) => {
          return (
            <Grid item key={eachProduct.upc.value}>
              <Card>{OrderGridItem(eachProduct)}</Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
