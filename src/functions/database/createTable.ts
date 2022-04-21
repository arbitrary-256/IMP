/** @format */
import dotenv from 'dotenv'
import { connectAsRoot } from './connectAsRoot'
import { IIMPDatabaseColumn } from '../../interfaces/IIMPDatabaseColumn'
/**
 * creates the database table on a fresh MariaDB instance
 * @returns a promise that resolves when the table is created in the database
 */
export const createTable = async (): Promise<void> => {
  dotenv.config()
  const rowHeaders: IIMPDatabaseColumn[] = [
    {
      colName: `upcValue`,
      type: `INT(12)`
    },
    {
      colName: `nameText`,
      type: `VARCHAR(255)`
    },
    {
      colName: `costValue`,
      type: `DECIMAL(5,2)`
    },
    {
      colName: `priceValue`,
      type: `DECIMAL(5,2)`
    },
    {
      colName: `minValue`,
      type: `INT(6)`
    },
    {
      colName: `inStockMin`,
      type: `INT(6)`
    },
    {
      colName: `inStockValue`,
      type: `INT(6)`
    },
    {
      colName: `inStockMax`,
      type: `INT(6)`
    },
    {
      colName: `maxValue`,
      type: `INT(6)`
    },
    {
      colName: `imageData`,
      type: `IMAGE`
    },
    {
      colName: `imageText`,
      type: `VARCHAR(255)`
    }
  ]
  const makeMariaDBColumn: Function = (columnInfo: IIMPDatabaseColumn): string => `${columnInfo.colName} ${columnInfo.type}`
  const createTableResult: string = await connectAsRoot.query(`CREATE TABLE IF NOT EXISTS products ( ${rowHeaders.map(makeMariaDBColumn()).join(`, `)} )`)
  console.log(createTableResult)
  connectAsRoot.end()
}
