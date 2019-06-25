import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MenuSheeshaListComponent } from './menu-sheesha-list/menu-sheesha-list.component';
import { MenuFoodListComponent } from './menu-food-list/menu-food-list.component';
import { MenuDrinksListComponent } from './menu-drinks-list/menu-drinks-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/menu.reducer';

@NgModule({
  declarations: [
    MenuListComponent,
    MenuItemComponent,
    MenuSidebarComponent,
    MenuSheeshaListComponent,
    MenuFoodListComponent,
    MenuDrinksListComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

    StoreModule.forFeature('menu', reducer)
  ]
})
export class MenuModule {}
