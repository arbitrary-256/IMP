/** @format */
import * as React from 'react'
import { OrderMiniCart } from './OrderMiniCart'
import { OrderGrid } from './OrderGrid'
import { Stack } from '@mui/material'
import { SearchOrder } from './SearchOrder'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/**
 * the order tab
 * @returns a React.FC that displays the order tab of the UI
 */
export const OrderView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  if (state.contentAreaView === `Order`) {
    return (
      <div className={`OrderView`}>
        <div className={`SearchInput`}>{SearchOrder({})}</div>
        <Stack className={`OrderViewSizer`} direction={`row`}>
          <div>{OrderGrid({})}</div>
          <div>{OrderMiniCart({})}</div>
        </Stack>
      </div>
    )
  } else {
    return <div className={`OrderView`} />
  }
}
