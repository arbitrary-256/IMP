/** @format */
import { IIMPAction } from '../../interfaces/IIMPAction'
export const determinePayloadType: Function = (action: IIMPAction): string =>
  `payload` in action
    ? action.payload
      ? typeof action.payload === `string`
        ? `failedon9`
        : `minValue` in action.payload
        ? `IIMPNumber`
        : `upc` in action.payload
        ? `IIMPProduct`
        : `data` in action.payload
        ? `IIMPImage`
        : `text` in action.payload
        ? `IIMPString`
        : `failedon18`
      : `failedon19`
    : `failedon20`
