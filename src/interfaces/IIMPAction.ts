/** @format */
// interfaces
import { IChangeLoginAction } from './actionInterfaces/authorization/IChangeLoginAction'
import { IPurchaseCartAction } from './actionInterfaces/cart/IPurchaseCartAction'
import { IUseNavBarAction } from './actionInterfaces/core/IUseNavBarAction'
import { IApplicationStartAction } from './actionInterfaces/core/IApplicationStartAction'
import { IRefreshDatabaseAction } from './actionInterfaces/database/IRefreshDatabaseAction'
import { IUpdateDatabaseAction } from './actionInterfaces/database/IUpdateDatabaseAction'
import { IUndoAction } from './actionInterfaces/history/IUndoAction'
import { IRedoAction } from './actionInterfaces/history/IRedoAction'
import { IReceiveInventoryAction } from './actionInterfaces/inventory/IReceiveInventoryAction'
import { IDeleteInventoryEntryAction } from './actionInterfaces/inventory/IDeleteInventoryEntryAction'
import { IUpdateInventoryEntryAction } from './actionInterfaces/inventory/IUpdateInventoryEntryAction'
import { IRestockInventoryEntryAction } from './actionInterfaces/inventory/IRestockInventoryEntryAction'
import { IInventorySearchAction } from './actionInterfaces/search/IInventorySearchAction'
import { IOrderSearchAction } from './actionInterfaces/search/IOrderSearchAction'
import { IRestockSearchAction } from './actionInterfaces/search/IRestockSearchAction'
import { IDecrementNumberAction } from './actionInterfaces/shared/IDecrementNumberAction'
import { IIncrementNumberAction } from './actionInterfaces/shared/IIncrementNumberAction'
import { ISetNumberAction } from './actionInterfaces/shared/ISetNumberAction'
import { ISetStringAction } from './actionInterfaces/shared/ISetStringAction'
import { IChangeAppearanceAction } from './actionInterfaces/core/IChangeAppearanceAction'
import { IUpdateImageAction } from './actionInterfaces/shared/IUpdateImageAction'
/**
 * a union type of every interface in src/interfaces/actionInterfaces
 */
export type IIMPAction =
  | IUndoAction
  | IRedoAction
  | IPurchaseCartAction
  | IChangeLoginAction
  | IApplicationStartAction
  | IUseNavBarAction
  | IRefreshDatabaseAction // TODO: add business logic
  | IUpdateDatabaseAction // TODO: add business logic
  | IDeleteInventoryEntryAction // TODO: add business logic
  | IUpdateInventoryEntryAction // TODO: add business logic
  | IReceiveInventoryAction
  | IRestockInventoryEntryAction
  | IInventorySearchAction
  | IOrderSearchAction
  | IRestockSearchAction
  | IDecrementNumberAction
  | IIncrementNumberAction
  | ISetNumberAction
  | ISetStringAction
  | IChangeAppearanceAction
  | IUpdateImageAction
