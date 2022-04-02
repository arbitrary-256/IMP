/** @format */
import { Button, Card, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import * as React from 'react'
import { NumberChanger } from '../../shared/NumberChanger'
import { IIMPProduct } from '../../../interfaces/IIMPProduct'
import { StringChanger } from '../../shared/StringChanger'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
/**
 * @product the IIMPProduct to be displayed from state.receivingProduct
 * @returns a React.FC that displays a form to receive a product
 */
export const ReceivingView: React.FC<IIMPProduct> = (product: IIMPProduct): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <div className={`Receiving`}>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={`60%`}>{StringChanger(product.name)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{NumberChanger(product.upc)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{NumberChanger(product.purchasePrice)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{NumberChanger(product.salePrice)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{NumberChanger(product.minQuantity)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{NumberChanger(product.maxQuantity)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{NumberChanger(product.quantityToReceive)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  variant={`contained`}
                  onClick={() => {
                    dispatch({
                      type: `CREATE_INVENTORY_ENTRY`,
                      payload: state.productToReceive
                    })
                  }}
                >
                  Receive Inventory
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
