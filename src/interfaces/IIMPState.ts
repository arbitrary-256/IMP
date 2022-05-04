/** @format */
/* material-ui components */
import { Theme } from '@mui/material'
/* interfaces */
import { IIMPProduct } from './IIMPProduct'
import { ILoginValue } from './unionTypes/ILoginValue'
import { INavBarTarget } from './unionTypes/INavBarTarget'
/**
 * the interface for the state of the application
 * @cart the user's current shopping cart contents
 * @contentAreaView the current application view displayed in the main part of the window
 * @filteredInventory the inStock view filtered by the user's search
 * @filteredOrder the order view filtered by the user's search
 * @filteredRestock the restock view filtered by the user's search
 * @inStock the current inventory
 * @inventorySearch the user's current search string in the inventory tab
 * @loggedInUser the user's current login status
 * @orderSearch the user's current search string in the order tab
 * @productToReceive an IIMPProduct to be received into inventory
 * @restockSearch the user's current search string in the restock tab
 * @theme the current theme of the application
 */
export interface IIMPState {
  cart: IIMPProduct[]
  contentAreaView: INavBarTarget
  inStock: IIMPProduct[]
  filteredInventory: IIMPProduct[]
  filteredOrder: IIMPProduct[]
  filteredRestock: IIMPProduct[]
  inventorySearch: string
  loggedInUser: ILoginValue
  orderSearch: string
  productToReceive: IIMPProduct
  restockSearch: string
  theme: Theme
}
