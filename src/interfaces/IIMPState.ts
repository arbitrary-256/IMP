/** @format */
import { ILoginValue } from './unionTypes/ILoginValue'
import { INavBarTarget } from './unionTypes/INavBarTarget'
import { IIMPProduct } from './IIMPProduct'
/**
 * the interface for the Application State
 * @cart the user's current shopping cart contents
 * @contentAreaView the current application view displayed in the main part of the window
 * @currentInventory the current inventory
 * @filteredInventory the currentInventory view filtered by the user's search
 * @filteredOrder the order view filtered by the user's search
 * @filteredRestock the restock view filtered by the user's search
 * @productToReceive an IIMPProduct to be received into inventory
 */
export interface IIMPState {
  cart: IIMPProduct[]
  contentAreaView: INavBarTarget
  currentInventory: IIMPProduct[]
  filteredInventory: IIMPProduct[]
  filteredOrder: IIMPProduct[]
  filteredRestock: IIMPProduct[]
  inventorySearch: string
  loggedInUser: ILoginValue
  orderSearch: string
  productToReceive: IIMPProduct
  restockSearch: string
  stateFuture: IIMPState[]
  stateHistory: IIMPState[]
}
