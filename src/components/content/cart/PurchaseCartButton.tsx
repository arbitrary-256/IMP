/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { Button } from '@mui/material'
// react context
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/**
 * a button that purchases the items in the cart when clicked
 * @returns a React.FC that renders the Purchase Cart button
 */
export const PurchaseCartButton: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Button
      variant={`contained`}
      color={`success`}
      disabled={state.cart.length === 0}
      onClick={() => {
        dispatch({
          type: `PURCHASE_CART`,
          payload: state.cart
        })
      }}
    >
      Purchase Cart
    </Button>
  )
}
