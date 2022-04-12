/** @format */
// libraries
import * as React from 'react'
// material-ui components
import { TableCell, TableRow } from '@mui/material'
// interfaces
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
// custom components
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringChanger } from '../../shared/StringChanger'
/**
 * a row of the inventory table
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays one row of the Inventory tab
 */
export const InventoryRow: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const upcIdentifier = product.upc.value.toString()
  return (
    <TableRow className={`InventoryRow`} key={`InventoryRow${upcIdentifier}`}>
      <TableCell key={`upc${upcIdentifier}`} width={`8%`}>
        {NumberDisplayer(product.upc)}
      </TableCell>
      <TableCell key={`name${upcIdentifier}`} width={`20%`}>
        {StringChanger({ string: product.name, newValue: product.name.text, product: product })}
      </TableCell>
      <TableCell key={`min${upcIdentifier}`} width={`12%`}>
        {NumberChanger({ number: product.min, product: product })}
      </TableCell>
      <TableCell key={`onHand${upcIdentifier}`} width={`12%`}>
        {NumberChanger({ number: product.onHand, product: product })}
      </TableCell>
      <TableCell key={`max${upcIdentifier}`} width={`12%`}>
        {NumberChanger({ number: product.max, product: product })}
      </TableCell>
      <TableCell key={`price${upcIdentifier}`} width={`12%`}>
        {NumberChanger({ number: product.price, product: product })}
      </TableCell>
      <TableCell key={`cost${upcIdentifier}`} width={`12%`}>
        {NumberChanger({ number: product.cost, product: product })}
      </TableCell>
    </TableRow>
  )
}
