/** @format */
import { TableCell, TableRow } from '@mui/material'
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringChanger } from '../../shared/StringChanger'
/**
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays one row of the Inventory tab
 */
export const InventoryRow: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  return (
    <TableRow className={`InventoryRow`} key={`InventoryRow${product.upc.currentValue}`}>
      <TableCell key={`UPCCode${product.upc.currentValue}`}>
        {NumberDisplayer(product.upc)}
        {` `}
        {StringChanger(product.name)}
      </TableCell>
      <TableCell key={`Min${product.upc.currentValue}`}>{NumberChanger(product.minQuantity)}</TableCell>
      <TableCell key={`InventoryCount${product.upc.currentValue}`}>{NumberChanger(product.quantityInInventory)}</TableCell>
      <TableCell key={`Max${product.upc.currentValue}`}>{NumberChanger(product.maxQuantity)}</TableCell>
      <TableCell key={`SalePrice${product.upc.currentValue}`}>{NumberChanger(product.salePrice)}</TableCell>
      <TableCell key={`PurchasePrice${product.upc.currentValue}`}>{NumberChanger(product.purchasePrice)}</TableCell>
    </TableRow>
  )
}
