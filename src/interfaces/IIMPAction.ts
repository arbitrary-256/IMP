/** @format */
import { IChangeLoginAction } from './actionInterfaces/authorization/IChangeLoginAction'
import { IPurchaseCartAction } from './actionInterfaces/cart/IPurchaseCartAction'
import { IUseNavBarAction } from './actionInterfaces/core/IUseNavBarAction'
import { IApplicationStartAction } from './actionInterfaces/core/IApplicationStartAction'
import { IRefreshDatabaseAction } from './actionInterfaces/database/IRefreshDatabaseAction'
import { IUpdateDatabaseAction } from './actionInterfaces/database/IUpdateDatabaseAction'
import { IUndoAction } from './actionInterfaces/history/IUndoAction'
import { IRedoAction } from './actionInterfaces/history/IRedoAction'
import { ICreateInventoryEntryAction } from './actionInterfaces/inventory/ICreateInventoryEntryAction'
import { IDeleteInventoryEntryAction } from './actionInterfaces/inventory/IDeleteInventoryEntryAction'
import { IModifyInventoryEntryAction } from './actionInterfaces/inventory/IModifyInventoryEntryAction'
import { IRestockInventoryEntryAction } from './actionInterfaces/inventory/IRestockInventoryEntryAction'
import { IInventorySearchAction } from './actionInterfaces/search/IInventorySearchAction'
import { IOrderSearchAction } from './actionInterfaces/search/IOrderSearchAction'
import { IRestockSearchAction } from './actionInterfaces/search/IRestockSearchAction'
import { IDecrementNumberAction } from './actionInterfaces/shared/IDecrementNumberAction'
import { IIncrementNumberAction } from './actionInterfaces/shared/IIncrementNumberAction'
import { ISetNumberAction } from './actionInterfaces/shared/ISetNumberAction'
import { ISetStringAction } from './actionInterfaces/shared/ISetStringAction'
export type IIMPAction =
  | IChangeLoginAction
  | IPurchaseCartAction // TODO: add business logic
  | IApplicationStartAction
  | IUseNavBarAction
  | IRefreshDatabaseAction // TODO: add business logic
  | IUpdateDatabaseAction // TODO: add business logic
  | IUndoAction // TODO: add business logic
  | IRedoAction // TODO: add business logic
  | ICreateInventoryEntryAction // TODO: add business logic
  | IDeleteInventoryEntryAction // TODO: add business logic
  | IModifyInventoryEntryAction // TODO: add business logic
  | IRestockInventoryEntryAction
  | IInventorySearchAction
  | IOrderSearchAction
  | IRestockSearchAction
  | IDecrementNumberAction
  | IIncrementNumberAction
  | ISetNumberAction
  | ISetStringAction
