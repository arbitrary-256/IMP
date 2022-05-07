/** @format */
import { IIMPSQLColumnName } from './unionTypes/IIMPSQLColumnName'
import { IIMPSQLDataType } from './unionTypes/IIMPSQLDataType'
/**
 * the interface for a column of a database table
 */
export interface IIMPDatabaseColumn {
  colName: IIMPSQLColumnName
  type: IIMPSQLDataType
}
