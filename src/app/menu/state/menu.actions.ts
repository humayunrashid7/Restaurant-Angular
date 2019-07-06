import {Action} from '@ngrx/store';
import {MenuItemBaseModel} from '../../core/models/menu-item.model';

export enum MenuActionTypes {
  ToggleSheeshaImages = '[Menu] Toggle Sheesha Images',
  SetCurrentSheeshaProduct = '[Menu] Set Current Sheesha Product',
  ClearCurrentSheeshaProduct = '[Menu] Clear Current Sheesha Product',
  InitializeCurrentSheeshaProduct = '[Menu] Initialize Current Sheesha Product',
  Load = '[Menu] Load',
  LoadSuccess = '[Menu] Load Success',
  LoadFail = '[Menu] Load Fail',
  UpdateSheeshaProduct = '[Menu-Sheesha] Update Sheesha Product',
  UpdateSheeshaProductSuccess = '[Menu-Sheesha] Update Sheesha Product Success',
  UpdateSheeshaProductFail = '[Menu-Sheesha] Update Sheesha Product Fail'
}

export class ToggleSheeshaImages implements Action {
  readonly type = MenuActionTypes.ToggleSheeshaImages;

  constructor(public payload: boolean) {}
}

export class SetCurrentSheeshaProduct implements Action {
  readonly type = MenuActionTypes.SetCurrentSheeshaProduct;

  constructor(public payload: MenuItemBaseModel) {}
}

export class ClearCurrentSheeshaProduct implements Action {
  readonly type = MenuActionTypes.ClearCurrentSheeshaProduct;

  constructor() {}
  // Empty constructor can be deleted since TypeScript provides it by default
  // No payload since the reducer will set the current product to null
}

export class InitializeCurrentSheeshaProduct implements Action {
  readonly type = MenuActionTypes.InitializeCurrentSheeshaProduct;

  constructor() {}
  // No payload since the reducer will provide initial values
}

export class Load implements Action {
  readonly type = MenuActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = MenuActionTypes.LoadSuccess;

  constructor(public payload: MenuItemBaseModel[]) {}
}

export class LoadFail implements Action {
  readonly type = MenuActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class UpdateSheeshaProduct implements Action {
  readonly type = MenuActionTypes.UpdateSheeshaProduct;

  constructor(public payload: MenuItemBaseModel[]) {}
}

export class UpdateSheeshaProductSuccess implements Action {
  readonly type = MenuActionTypes.UpdateSheeshaProductSuccess;

  constructor(public payload: MenuItemBaseModel[]) {}
}

export class UpdateSheeshaProductFail implements Action {
  readonly type = MenuActionTypes.UpdateSheeshaProductFail;

  constructor(public payload: string) {}
}

export type MenuActions = ToggleSheeshaImages
  | SetCurrentSheeshaProduct
  | ClearCurrentSheeshaProduct
  | InitializeCurrentSheeshaProduct
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateSheeshaProduct
  | UpdateSheeshaProductSuccess
  | UpdateSheeshaProductFail;
