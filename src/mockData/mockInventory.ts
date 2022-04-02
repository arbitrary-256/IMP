/** @format */
import { IIMPProduct } from '../interfaces/IIMPProduct'
import { generateProduct } from '../functions/helpers/generateProduct'
export const mockInventory: Function = (): IIMPProduct[] => {
  const tempInventory: IIMPProduct[] = []
  for (let i = 0; i < 50; i++) {
    tempInventory.push(generateProduct())
  }
  return tempInventory
}
