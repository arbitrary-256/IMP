/** @format */
import { Stack, TableCell, TableRow } from '@mui/material'
import * as React from 'react'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringChanger } from '../../shared/StringChanger'
/**
 * a row of the inventory table
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays one row of the Inventory tab
 */
export const InventoryRow: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  return (
    <TableRow className={`InventoryRow`} key={`InventoryRow${product.upc.value}`}>
      <TableCell key={`UPCCode${product.upc.value}`} width={`5%`}>
        {NumberDisplayer(product.upc)}
      </TableCell>
      <TableCell key={`UPCCode${product.name.text}`} width={`15%`}>
        {StringChanger({ string: product.name, newValue: product.name.text, product: product })}
      </TableCell>
      <TableCell key={`min${product.upc.value}`} width={`12%`}>
        {NumberChanger({ number: product.min, product: product })}
      </TableCell>
      <TableCell key={`onHand${product.upc.value}`} width={`12%`}>
        {NumberChanger({ number: product.onHand, product: product })}
      </TableCell>
      <TableCell key={`max${product.upc.value}`} width={`12%`}>
        {NumberChanger({ number: product.max, product: product })}
      </TableCell>
      <TableCell key={`price${product.upc.value}`} width={`12%`}>
        {NumberChanger({ number: product.price, product: product })}
      </TableCell>
      <TableCell key={`cost${product.upc.value}`} width={`12%`}>
        {NumberChanger({ number: product.cost, product: product })}
      </TableCell>
    </TableRow>
  )
}
