/** @format */
import { IIMPProduct } from '../../interfaces/IIMPProduct'
import { IIMPState } from '../../interfaces/IIMPState'
import { IUserInterfaceSection } from '../../interfaces/unionTypes/IUserInterfaceSection'
export const determineProductLocation: Function = (productToLocate: IIMPProduct, state: IIMPState): IUserInterfaceSection =>
  state.currentInventory.some((product: IIMPProduct): boolean => product.upc.currentValue === productToLocate.upc.currentValue) ? `inventory` : `receiving`
