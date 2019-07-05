import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MenuService} from '../menu.service';
import * as menuActions from './menu.actions';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {MenuItemBaseModel} from '../menu-item/menu-item.model';
import {of} from 'rxjs';

@Injectable()
export class MenuEffects {

  constructor(private actions$: Actions, private menuService: MenuService) {}

  @Effect()
  loadMenuItems$ = this.actions$.pipe(
    ofType(menuActions.MenuActionTypes.Load),
    mergeMap((action: menuActions.Load) => this.menuService.getAllSheeshaItems().pipe(
      map((menuItems: MenuItemBaseModel[]) => (new menuActions.LoadSuccess(menuItems))),
      catchError(err => of(new menuActions.LoadFail(err)))
    ))
  );
}
