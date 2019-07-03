import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenuItemBaseModel} from './menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  sheeshaItems: MenuItemBaseModel[] = [];
  sampleSheeshaItem: MenuItemBaseModel;
  sampleSheeshaItem2: MenuItemBaseModel;
  sampleSheeshaItem3: MenuItemBaseModel;
  sampleSheeshaItem4: MenuItemBaseModel;
  sampleSheeshaItem5: MenuItemBaseModel;

  constructor(private http: HttpClient) {
    this.InitializeData();
  }

  getAllSheeshaItems(): MenuItemBaseModel[] {
    return this.sheeshaItems;
  }

  getSheeshaItemById(itemId: number): MenuItemBaseModel {
    return this.sheeshaItems.find(x => x.id === itemId);
  }

  createSheeshaItem(item: MenuItemBaseModel): void {
    this.sheeshaItems.push(item);
  }

  updateSheeshaItemById(item: MenuItemBaseModel): void {
    const index = this.sheeshaItems.findIndex(x => x.id === item.id);
    this.sheeshaItems[index] = item;
  }

  deleteSheeshaItemById(itemId: number): void {
    const index = this.sheeshaItems.findIndex(x => x.id === itemId);
    this.sheeshaItems.splice(index, 1);
  }

  InitializeData() {
    this.sampleSheeshaItem = new MenuItemBaseModel();
    this.sampleSheeshaItem.id = 1;
    this.sampleSheeshaItem.type = 1;
    this.sampleSheeshaItem.name = 'Afzal Paan Rasna';
    this.sampleSheeshaItem.description = 'Best paan in town with select herbal flavours.';
    this.sampleSheeshaItem.imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/51ldJT40x1L.jpg';
    this.sampleSheeshaItem.price = 18.99;

    this.sampleSheeshaItem2 = new MenuItemBaseModel();
    this.sampleSheeshaItem2.id = 2;
    this.sampleSheeshaItem2.type = 1;
    this.sampleSheeshaItem2.name = 'Afzal Kiwi Paan';
    this.sampleSheeshaItem2.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleSheeshaItem2.imageUrl = 'http://www.soex.com/wp-content/uploads/2018/09/grape-fruit.jpg';
    this.sampleSheeshaItem2.price = 18.99;

    this.sampleSheeshaItem3 = new MenuItemBaseModel();
    this.sampleSheeshaItem3.id = 3;
    this.sampleSheeshaItem3.type = 1;
    this.sampleSheeshaItem3.name = 'Double Apple';
    this.sampleSheeshaItem3.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleSheeshaItem3.imageUrl = 'https://www.hookahcompany.com/images_products/AF-250-Jar-TwoApples-hc-l.jpg';
    this.sampleSheeshaItem3.price = 18.99;

    this.sampleSheeshaItem4 = new MenuItemBaseModel();
    this.sampleSheeshaItem4.id = 4;
    this.sampleSheeshaItem4.type = 1;
    this.sampleSheeshaItem4.name = 'Premium Blue Mist';
    this.sampleSheeshaItem4.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleSheeshaItem4.imageUrl = 'https://www.hookahcompany.com/images_products/2587_big.jpg';
    this.sampleSheeshaItem4.price = 18.99;

    this.sampleSheeshaItem5 = new MenuItemBaseModel();
    this.sampleSheeshaItem5.id = 5;
    this.sampleSheeshaItem5.type = 1;
    this.sampleSheeshaItem5.name = 'Premium House Special';
    this.sampleSheeshaItem5.description = 'The best in house made sheesha';
    this.sampleSheeshaItem5.imageUrl = 'https://sc01.alicdn.com/kf/HTB1yuCjIpXXXXcvXXXXq6xXFXXXe/New-product-hot-sell-online-e-shisha.jpg';
    this.sampleSheeshaItem5.price = 18.99;

    this.sheeshaItems.push(this.sampleSheeshaItem);
    this.sheeshaItems.push(this.sampleSheeshaItem2);
    this.sheeshaItems.push(this.sampleSheeshaItem3);
    this.sheeshaItems.push(this.sampleSheeshaItem4);
    this.sheeshaItems.push(this.sampleSheeshaItem5);
  }
}
