/** @format */
import { Table, TableBody } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { InventoryRow } from './InventoryRow'
import { SearchInventory } from './SearchInventory'
/**
 * the inventory tab
 * @returns a React.FC that displays the Inventory tab of the UI
 */
export const InventoryView: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  if (state.contentAreaView === `Inventory`) {
    return (
      <div className={`InventoryView`}>
        {SearchInventory({})}
        <Table>
          <TableBody>
            {state.filteredInventory.length === 0 && state.inventorySearch.length === 0
              ? state.inStock.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))
              : state.filteredInventory.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))}
          </TableBody>
        </Table>
      </div>
    )
  } else {
    return <div className={`InventoryView`} />
  }
}
