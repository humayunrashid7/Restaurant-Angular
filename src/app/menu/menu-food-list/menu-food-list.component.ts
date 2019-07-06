import { Component, OnInit } from '@angular/core';
import {MenuItemBaseModel} from '../../core/models/menu-item.model';

@Component({
  selector: 'app-menu-food-list',
  templateUrl: './menu-food-list.component.html',
  styleUrls: ['./menu-food-list.component.css']
})
export class MenuFoodListComponent implements OnInit {
  LunchItems: MenuItemBaseModel[] = [];
  DinnerItems: MenuItemBaseModel[] = [];

  sampleItem: MenuItemBaseModel;
  sampleItem2: MenuItemBaseModel;
  sampleItem3: MenuItemBaseModel;
  sampleItem4: MenuItemBaseModel;
  sampleItem5: MenuItemBaseModel;

  constructor() {
    this.sampleItem = new MenuItemBaseModel();
    this.sampleItem.id = 1;
    this.sampleItem.type = 2;
    this.sampleItem.name = 'Doner Kebab - Chicken';
    this.sampleItem.description = 'Homemade Chicken Doner Kebab recipe - Best in Town!';
    this.sampleItem.imageUrl = 'http://fareham.kenskebabs.co.uk/image/cache/data/meal_deals/chicken__doner_kebab_meal-500x500.jpg';
    this.sampleItem.price = 7.99;

    this.LunchItems.push(this.sampleItem);

    this.sampleItem2 = new MenuItemBaseModel();
    this.sampleItem2.id = 1;
    this.sampleItem2.type = 2;
    this.sampleItem2.name = 'Doner Kebab - Plate';
    this.sampleItem2.description = 'Homemade Chicken Doner Kebab with Rice and Salad';
    this.sampleItem2.imageUrl = 'https://est.lv/upload/1507561897-doner_plate.png';
    this.sampleItem2.price = 12.99;

    this.DinnerItems.push(this.sampleItem2);
  }

  ngOnInit() {
  }

}
