import {Action} from '@ngrx/store';
import {MenuItemBaseModel} from '../menu-item/menu-item.model';

export enum MenuActionTypes {
  ToggleSheeshaImages = '[Menu] Toggle Sheesha Images',
  SetCurrentSheeshaProduct = '[Menu] Set Current Sheesha Product',
  ClearCurrentSheeshaProduct = '[Menu] Clear Current Sheesha Product',
  InitializeCurrentSheeshaProduct = '[Menu] Initialize Current Sheesha Product'
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

export type MenuActions = ToggleSheeshaImages
  | SetCurrentSheeshaProduct
  | ClearCurrentSheeshaProduct
  | InitializeCurrentSheeshaProduct;
