/** @format */
/* interfaces */
import { IIMPSQLRow } from '../../interfaces/IIMPSQLRow'
/* helper functions */
import { createEmptyProduct } from './createEmptyProduct'
import { convertProduct } from './convertProduct'
/**
 * creates an empty product row to populate for the sql database
 * @returns a product row with all values set to default
 */
export const createEmptyRow: Function = (): IIMPSQLRow => convertProduct(createEmptyProduct())
