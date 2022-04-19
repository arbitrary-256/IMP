/** @format */
import { rootConnection } from './rootConnection'
import { IIMPDatabaseColumn } from '../../interfaces/IIMPDatabaseColumn'
/**
 * creates the database table on a fresh MariaDB instance
 * @returns a promise that resolves when the table is created in the database
 */
export const createTable = async (): Promise<void> => {
  const rowHeaders: IIMPDatabaseColumn[] = [
    {
      colName: `nameText`,
      type: `VARCHAR(255)`
    },
    {
      colName: `upcValue`,
      type: `INT(12)`
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
      colName: `minValue`,
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
    },
    {
      colName: `dateAdded`,
      type: `DATE`
    },
    {
      colName: `timeAdded`,
      type: `TIME`
    },
    {
      colName: `dateModified`,
      type: `DATE`
    },
    {
      colName: `timeModified`,
      type: `TIME`
    },
    {
      colName: `dateLastSold`,
      type: `DATE`
    },
    {
      colName: `timeLastSold`,
      type: `TIME`
    }
  ]
  console.log(rowHeaders.toString())
  await rootConnection.query(``)
  rootConnection.end()
}
