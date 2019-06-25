import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuSidebarComponent} from './menu-sidebar/menu-sidebar.component';
import {MenuSheeshaListComponent} from './menu-sheesha-list/menu-sheesha-list.component';
import {MenuDrinksListComponent} from './menu-drinks-list/menu-drinks-list.component';
import {MenuFoodListComponent} from './menu-food-list/menu-food-list.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MenuSidebarComponent,
    children: [
      {
        path: 'sheesha',
        component: MenuSheeshaListComponent,
        // canActivate: [AuthGuardService]
      },
      {
        path: 'food',
        component: MenuFoodListComponent,
        // canActivate: [AuthGuardService]
      },
      {
        path: 'drinks',
        component: MenuDrinksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
