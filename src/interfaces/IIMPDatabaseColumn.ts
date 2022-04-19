/** @format */
import { IMariaDBColumnName } from './unionTypes/IMariaDBColumnName'
import { IMariaDBDataType } from './unionTypes/IMariaDBDataType'
/**
 * the interface for a column of a database table
 */
export interface IIMPDatabaseColumn {
  colName: IMariaDBColumnName
  type: IMariaDBDataType
}
