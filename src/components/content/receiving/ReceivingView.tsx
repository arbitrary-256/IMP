/** @format */
import * as React from 'react'
import { Box, Button, Card, Table, TableHead, TableBody, TableCell, TableRow, Stack } from '@mui/material'
import { IIMPAction } from '../../../interfaces/IIMPAction'
import { IIMPState } from '../../../interfaces/IIMPState'
import { ImpContext } from '../../ImpContext'
import { NumberChanger } from '../../shared/NumberChanger'
import { StringChanger } from '../../shared/StringChanger'
import { ImageChanger } from '../../shared/ImageChanger'
// import imp from '../../../images/imp.png'
/**
 * the receiving tab
 * @returns a React.FC that displays a form to receive a product
 */
export const ReceivingView: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IIMPState
    dispatch: React.Dispatch<IIMPAction>
  } = React.useContext(ImpContext)
  return (
    <Box className={`Receiving`} sx={{ display: state.contentAreaView === `Receiving` ? `block` : `none` }}>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={`50%`}>{StringChanger({ string: state.productToReceive.name, newValue: state.productToReceive.name.text, product: state.productToReceive })}</TableCell>
              <TableCell width={`50%`}>{ImageChanger({ image: state.productToReceive.image, product: state.productToReceive })}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Stack direction={`row`}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.upc, product: state.productToReceive })}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.cost, product: state.productToReceive })}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.price, product: state.productToReceive })}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.min, product: state.productToReceive })}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.max, product: state.productToReceive })}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{NumberChanger({ number: state.productToReceive.toReceive, product: state.productToReceive })}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
        <Button
          size={`large`}
          variant={`contained`}
          color={`success`}
          disabled={state.productToReceive.toReceive.value > state.productToReceive.max.value || state.productToReceive.toReceive.value < state.productToReceive.min.value}
          onClick={() => {
            dispatch({
              type: `RECEIVE_INVENTORY`,
              payload: state.productToReceive
            })
          }}
        >
          Receive Inventory
        </Button>
      </Card>
    </Box>
  )
}
