/** @format */
/* libraries */
import * as React from 'react'
/* material-ui components */
import { Stack, TableCell, TableRow } from '@mui/material'
/* interfaces */
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
/* custom components */
import { NumberChanger } from '../../shared/NumberChanger'
import { NumberDisplayer } from '../../shared/NumberDisplayer'
import { StringChanger } from '../../shared/StringChanger'
import { StringDisplayer } from '../../shared/StringDisplayer'
import { ImageChanger } from '../../shared/ImageChanger'
import { ImageDisplayer } from '../../shared/ImageDisplayer'
import { InventoryEditButton } from './InventoryEditButton'
import { InventoryDeleteButton } from './InventoryDeleteButton'
/**
 * 1.7.4.1.	Inventory Table Row Module
 */
/**
 * a row of the inventory table
 * 
 * satisfies requirements 14, 16.
 * 
 * @param product the IIMPProduct to be displayed
 * @returns a React.FC that displays one row of the Inventory tab
 */
export const InventoryRow: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const upcIdentifier = product.upc.value.toString()
  return product.editingMode === true ? (
    <TableRow
      className={`InventoryRow`}
      key={`InventoryRow${upcIdentifier}`}
      sx={{ height: `20vh` }}>
      <TableCell
        key={`editButtons${upcIdentifier}`}
        width={`4%`}>
        <Stack direction={`column`}>
          {InventoryEditButton(product)}
          <p />
          {InventoryDeleteButton(product)}
        </Stack>
      </TableCell>
      <TableCell
        key={`image${upcIdentifier}`}
        width={`8%`}>
        {ImageChanger(product)}
      </TableCell>
      <TableCell
        key={`upc${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.upc, product })}
      </TableCell>
      <TableCell key={`name${upcIdentifier}`}>{StringChanger({ string: product.name, newValue: product.name.text, product: product })}</TableCell>
      <TableCell
        key={`min${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.min, product })}
      </TableCell>
      <TableCell
        key={`inStock${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.inStock, product })}
      </TableCell>
      <TableCell
        key={`max${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.max, product })}
      </TableCell>
      <TableCell
        key={`price${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.price, product })}
      </TableCell>
      <TableCell
        key={`cost${upcIdentifier}`}
        width={`10%`}>
        {NumberChanger({ number: product.cost, product })}
      </TableCell>
    </TableRow>
  ) : (
    <TableRow
      className={`InventoryRow`}
      key={`InventoryRow${upcIdentifier}`}
      sx={{ height: `20vh` }}>
      <TableCell
        key={`editButtons${upcIdentifier}`}
        width={`4%`}>
        <Stack direction={`column`}>
          {InventoryEditButton(product)}
          <p />
          {InventoryDeleteButton(product)}
        </Stack>
      </TableCell>
      <TableCell
        key={`image${upcIdentifier}`}
        width={`8%`}>
        {ImageDisplayer(product.image)}
      </TableCell>
      <TableCell
        key={`upc${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.upc)}
      </TableCell>
      <TableCell key={`name${upcIdentifier}`}>{StringDisplayer(product.name)}</TableCell>
      <TableCell
        key={`min${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.min)}
      </TableCell>
      <TableCell
        key={`inStock${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.inStock)}
      </TableCell>
      <TableCell
        key={`max${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.max)}
      </TableCell>
      <TableCell
        key={`price${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.price)}
      </TableCell>
      <TableCell
        key={`cost${upcIdentifier}`}
        width={`10%`}>
        {NumberDisplayer(product.cost)}
      </TableCell>
    </TableRow>
  )
}
