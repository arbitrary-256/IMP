/** @format */
// interfaces
import { IIMPDatabaseColumn } from './IIMPDatabaseColumn'
import { IIMPDatabaseRow } from './IIMPDatabaseRow'
/**
 * the interface for a database table
 * @property columns the IIMPDatabaseColumns that define the table's structure
 * @property rows the IIMPDatabaseRows that define the table's data
 */
export interface IIMPDatabaseTable {
  columns: IIMPDatabaseColumn[]
  rows: IIMPDatabaseRow[]
}
