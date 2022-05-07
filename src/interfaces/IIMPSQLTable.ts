/** @format */
/* interfaces */
import { IIMPSQLRow } from './IIMPSQLRow'
import { IIMPSQLColumnName } from './unionTypes/IIMPSQLColumnName'
/**
 * the interface for a database table
 * @property columns the IIMPDatabaseColumns that define the table's structure
 * @property rows the IIMPDatabaseRows that define the table's data
 */
export interface IIMPDatabaseTable {
  columns: IIMPSQLColumnName[]
  rows: IIMPSQLRow[]
}
