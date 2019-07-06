import {MenuItemBaseModel} from '../../core/models/menu-item.model';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MenuActions, MenuActionTypes} from './menu.actions';

export interface MenuState {
  displaySheeshaImages: boolean;
  currentSheeshaId: number;
  allSheeshaMenuItems: MenuItemBaseModel[];
  allFoodMenuItems: MenuItemBaseModel[];
  allDrinksMenuItems: MenuItemBaseModel[];
  error: string;
}

export interface State extends fromRoot.State {
  menu: MenuState;
}

const initialState: MenuState = {
  displaySheeshaImages: true,
  currentSheeshaId: null,
  allDrinksMenuItems: [],
  allFoodMenuItems: [],
  allSheeshaMenuItems: [],
  error: ''
}

const getMenuFeatureState = createFeatureSelector<MenuState>('menu');

export const getDisplaySheeshaImages = createSelector(
  getMenuFeatureState,
  state => state.displaySheeshaImages
);

export const getCurrentSheeshaId = createSelector(
  getMenuFeatureState,
  state => state.currentSheeshaId
);

export const getCurrentSheeshaProduct = createSelector(
  getMenuFeatureState,
  getCurrentSheeshaId,
  (state, currentSheeshaId) => {
    if (currentSheeshaId === 0) {
      return {
        id: 0,
        type: 0,
        name: '',
        imageUrl: '',
        description: '',
        price: 0.00
      };
    } else {
      return currentSheeshaId ? state.allSheeshaMenuItems.find(x => x.id === currentSheeshaId) : null;
    }
  }
);

export const getAllDrinksMenuItems = createSelector(
  getMenuFeatureState,
  state => state.allDrinksMenuItems
);

export const getAllFoodMenuItems = createSelector(
  getMenuFeatureState,
  state => state.allFoodMenuItems
);

export const getAllSheeshaMenuItems = createSelector(
  getMenuFeatureState,
  state => state.allSheeshaMenuItems
);

export const getError = createSelector(
  getMenuFeatureState,
  state => state.error
);

export function reducer(state: MenuState = initialState, action: MenuActions): MenuState {
  switch (action.type) {

    case MenuActionTypes.ToggleSheeshaImages:
      return {
        ...state,
        displaySheeshaImages: action.payload
      };

    case MenuActionTypes.SetCurrentSheeshaProduct:
      return {
        ...state,
        currentSheeshaId: action.payload.id
      };

    case MenuActionTypes.ClearCurrentSheeshaProduct:
      return {
        ...state,
        currentSheeshaId: null
      };

    case MenuActionTypes.InitializeCurrentSheeshaProduct:
      return {
        ...state,
        currentSheeshaId: 0
      };

    case MenuActionTypes.LoadSuccess:
      return {
        ...state,
        allSheeshaMenuItems: action.payload,
        error: ''
      };

    case MenuActionTypes.LoadFail:
      return {
        ...state,
        allSheeshaMenuItems: [],
        error: action.payload
      };

    default:
      return state;
  }
}

/* Reducer fn without strong action typing
export function reducer(state: MenuState = initialState, action): MenuState {
  switch (action.type) {

    case 'TOGGLE_SHEESHA_IMAGES':
      console.log('existing state: ' + JSON.stringify(state));
      console.log('payload: ' + action.payload);
      return {
        ...state,
        displaySheeshaImages: action.payload
      };
  ...
  }
}
*/
