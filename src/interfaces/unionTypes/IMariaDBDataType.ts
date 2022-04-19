/** @format */
/**
 * a union type of all possible dataTypes for MariaDB columns
 */
export type IMariaDBDataType =
  // boolean
  | `BOOL` // 0 (false) OR 1 (true) OR null (NULL)
  // number
  | `INT(5)` // a 5-byte integer
  | `INT(6)` // a 6-byte integer
  | `INT(12)` // a 12-byte integer
  | `DECIMAL(5,2)` // a float with 5 digits before the decmial and 2 after
  // string
  | `VARCHAR(255)` // a string of no more than 255 characters
  // binary data
  | `IMAGE` // a binary data stream of less than 2GB
  // dates and times
  | `DATE` // a date
  | `TIME` // a time
