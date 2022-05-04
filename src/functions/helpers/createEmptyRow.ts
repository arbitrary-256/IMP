/** @format */
/* interfaces */
import { IIMPDatabaseRow } from '../../interfaces/IIMPDatabaseRow'
/* helper functions */
import { createEmptyProduct } from './createEmptyProduct'
import { convertProduct } from './convertProduct'
/**
 * creates an empty product row for the MariaDB database
 * @returns a product row with all values set to default
 */
export const createEmptyRow: Function = (): IIMPDatabaseRow => convertProduct(createEmptyProduct())
