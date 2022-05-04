/** @format */
/* interfaces */
import { IIMPDatabaseRow } from './IIMPDatabaseRow'
import { IMariaDBColumnName } from './unionTypes/IMariaDBColumnName'
/**
 * the interface for a database table
 * @property columns the IIMPDatabaseColumns that define the table's structure
 * @property rows the IIMPDatabaseRows that define the table's data
 */
export interface IIMPDatabaseTable {
  columns: IMariaDBColumnName[]
  rows: IIMPDatabaseRow[]
}
