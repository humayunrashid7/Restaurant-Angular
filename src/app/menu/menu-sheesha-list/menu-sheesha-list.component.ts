import { Component, OnInit } from '@angular/core';
import {MenuItemBaseModel} from '../menu-item/menu-item.model';
import {select, Store} from '@ngrx/store';
import * as fromMenu from '../state/menu.reducer';
import * as menuActions from '../state/menu.actions';

@Component({
  selector: 'app-menu-sheesha-list',
  templateUrl: './menu-sheesha-list.component.html',
  styleUrls: ['./menu-sheesha-list.component.css']
})
export class MenuSheeshaListComponent implements OnInit {

  toggleSheeshaImages: boolean;

  items: MenuItemBaseModel[] = [];
  sampleItem: MenuItemBaseModel;
  sampleItem2: MenuItemBaseModel;
  sampleItem3: MenuItemBaseModel;
  sampleItem4: MenuItemBaseModel;
  sampleItem5: MenuItemBaseModel;

  constructor(private store: Store<fromMenu.State>) {}

  ngOnInit() {
    // TODO: Unsubscribe
    // Get the values from the State by subscribing to it
    this.store.pipe(select(fromMenu.getDisplaySheeshaImages)).subscribe(
      displaySheeshaImages => this.toggleSheeshaImages = displaySheeshaImages
    );

    /* Same as above but without using selectors */
    // this.store.pipe(select('menu')).subscribe(
    //   menu => this.toggleSheeshaImages = menu.displaySheeshaImages
    // );
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new menuActions.ToggleSheeshaImages(value));

    /* Dispatch Action without strong typing
    this.store.dispatch({
      type: 'TOGGLE_SHEESHA_IMAGES',
      payload: value
    }); */
  }

}
