/** @format */
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { Card, Grid } from '@mui/material'
import { CartGridItem } from './CartGridItem'
import { PurchaseCartButton } from './PurchaseCartButton'
/**
 * @param products the IIMPProducts in state.cart
 * @returns a React.FC that displays the Cart tab of the UI
 */
export const CartView: React.FC<IIMPProduct[]> = (products: IIMPProduct[]): React.ReactElement => {
  // map through all products in cart and generate total price for each item as an arrray
  const totalPrices: number[] = products.map((product: IIMPProduct): number => product.salePrice.currentValue * product.quantityInCart.currentValue)
  // then total all the prices in the total price array
  const totalPrice: number = totalPrices.reduce((accumulator: number, currentValue: number): number => accumulator + currentValue, 0)
  return (
    <div className={`CartView`}>
      <p>{`Total Price: $${totalPrice.toFixed(2)}`}</p>
      <PurchaseCartButton />
      <p />
      <Grid container spacing={2}>
        {products.map((eachProduct: IIMPProduct) => (
          <Grid item key={`CartCard${eachProduct.upc.currentValue}`}>
            <Card>{CartGridItem(eachProduct)}</Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
