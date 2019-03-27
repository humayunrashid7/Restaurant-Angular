import { Component, OnInit } from '@angular/core';
import {MenuItemBaseModel} from '../menu-item/menu-item.model';

@Component({
  selector: 'app-menu-sheesha-list',
  templateUrl: './menu-sheesha-list.component.html',
  styleUrls: ['./menu-sheesha-list.component.css']
})
export class MenuSheeshaListComponent implements OnInit {

  items: MenuItemBaseModel[] = [];
  sampleItem: MenuItemBaseModel;
  sampleItem2: MenuItemBaseModel;
  sampleItem3: MenuItemBaseModel;
  sampleItem4: MenuItemBaseModel;
  sampleItem5: MenuItemBaseModel;

  constructor() {
    this.sampleItem = new MenuItemBaseModel();
    this.sampleItem.id = 1;
    this.sampleItem.type = 1;
    this.sampleItem.name = 'Afzal Paan Rasna';
    this.sampleItem.description = 'Best paan in town with select herbal flavours.';
    this.sampleItem.imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/51ldJT40x1L.jpg';
    this.sampleItem.price = 18.99;

    this.sampleItem2 = new MenuItemBaseModel();
    this.sampleItem2.id = 2;
    this.sampleItem2.type = 1;
    this.sampleItem2.name = 'Afzal Kiwi Paan';
    this.sampleItem2.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleItem2.imageUrl = 'http://aladin.kiev.ua/images/stories/virtuemart/product/Tabak-Afzal-Kiwi-Fusion-Kivi-Fyyughn-' +
      '50gr----------.jpg';
    this.sampleItem2.price = 18.99;

    this.sampleItem3 = new MenuItemBaseModel();
    this.sampleItem3.id = 3;
    this.sampleItem3.type = 1;
    this.sampleItem3.name = 'Double Apple';
    this.sampleItem3.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleItem3.imageUrl = 'https://www.hookahcompany.com/images_products/AF-250-Jar-TwoApples-hc-l.jpg';
    this.sampleItem3.price = 18.99;

    this.sampleItem4 = new MenuItemBaseModel();
    this.sampleItem4.id = 4;
    this.sampleItem4.type = 1;
    this.sampleItem4.name = 'Premium Blue Mist';
    this.sampleItem4.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleItem4.imageUrl = 'https://www.hookahcompany.com/images_products/2587_big.jpg';
    this.sampleItem4.price = 18.99;

    this.sampleItem5 = new MenuItemBaseModel();
    this.sampleItem5.id = 5;
    this.sampleItem5.type = 1;
    this.sampleItem5.name = 'Premium House Special';
    this.sampleItem5.description = 'The best in house made sheesha';
    this.sampleItem5.imageUrl = 'https://sc01.alicdn.com/kf/HTB1yuCjIpXXXXcvXXXXq6xXFXXXe/New-product-hot-sell-online-e-shisha.jpg';
    this.sampleItem5.price = 18.99;

    this.items.push(this.sampleItem);
    this.items.push(this.sampleItem2);
    this.items.push(this.sampleItem3);
    this.items.push(this.sampleItem4);
    this.items.push(this.sampleItem5);

  }

  ngOnInit() {
  }

}
