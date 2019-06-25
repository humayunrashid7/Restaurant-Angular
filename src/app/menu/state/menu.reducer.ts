import {MenuItemBaseModel} from '../menu-item/menu-item.model';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MenuActions, MenuActionTypes} from './menu.actions';

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
        currentSheeshaProduct: {...action.payload}
        /* create copy of action to prevent mutation of the object
           in the store. Explained in Module 7: Demo: Using Strongly Typed Actions
          of Deobrah Kurata Pluralsight Course*/
      };

    case MenuActionTypes.ClearCurrentSheeshaProduct:
      return {
        ...state,
        currentSheeshaProduct: null
      };

    case MenuActionTypes.InitializeCurrentSheeshaProduct:
      return {
        ...state,
        currentSheeshaProduct: {
          id: 0,
          type: 0,
          name: '',
          imageUrl: '',
          description: '',
          price: 0.00
        }
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

export interface MenuState {
  displaySheeshaImages: boolean;
  currentSheeshaProduct: MenuItemBaseModel;
  allSheeshaMenuItems: MenuItemBaseModel[];
  allFoodMenuItems: MenuItemBaseModel[];
  allDrinksMenuItems: MenuItemBaseModel[];
}

export interface State extends fromRoot.State {
  menu: MenuState;
}

const initialState: MenuState = {
  displaySheeshaImages: true,
  currentSheeshaProduct: null,
  allDrinksMenuItems: [],
  allFoodMenuItems: [],
  allSheeshaMenuItems: []
}

const getMenuFeatureState = createFeatureSelector<MenuState>('menu');

export const getDisplaySheeshaImages = createSelector(
  getMenuFeatureState,
  state => state.displaySheeshaImages
);

export const getCurrentSheeshaProduct = createSelector(
  getMenuFeatureState,
  state => state.currentSheeshaProduct
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
