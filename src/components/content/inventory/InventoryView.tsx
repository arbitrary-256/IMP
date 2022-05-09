/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Box, Table, TableBody } from '@mui/material'
/* interfaces */
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/* react context */
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/* custom components */
import { InventoryRow } from './InventoryRow'
/* helper functions */
import { SearchInventory } from './SearchInventory'
/**
 * the inventory tab
 * 
 * satisfies requirements 4, 14, 16.
 * 
 * @returns a React.FC that displays the Inventory tab of the UI
 */
export const InventoryView: React.FC = (): React.ReactElement => {
  const {
    state
  }: {
    state: IIMPState
  } = React.useContext(ImpContext)
  return (
    <Box
      className={`InventoryView`}
      sx={{ display: state.contentAreaView === `Inventory` ? `block` : `none` }}>
      {SearchInventory({})}
      <Table>
        <TableBody>
          {state.filteredInventory.length === 0 && state.inventorySearch.length === 0
            ? state.inStock.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))
            : state.filteredInventory.map((eachProduct: IIMPProduct) => InventoryRow(eachProduct))}
        </TableBody>
      </Table>
    </Box>
  )
}
