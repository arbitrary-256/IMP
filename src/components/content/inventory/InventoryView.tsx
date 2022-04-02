/** @format */
import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import * as React from 'react'
import { IIMPState } from '../../../interfaces/IIMPState'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { ImpContext } from '../../ImpContext'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { InventoryRow } from './InventoryRow'
import { SearchInventory } from './SearchInventory'
/**
 * @products the IIMPProduct[] to be displayed
 * @returns a React.FC that displays the Inventory tab of the UI
 */
export const InventoryView: React.FC<IIMPProduct[]> = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <div className={`InventoryView`}>
      <Card>
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCell>{SearchInventory(state.currentInventory)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.filteredInventory.length === 0 && state.inventorySearch.length === 0
              ? state.currentInventory.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))
              : state.filteredInventory.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
