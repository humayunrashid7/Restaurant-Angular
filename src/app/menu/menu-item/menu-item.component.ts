import { Component, OnInit } from '@angular/core';
import {MenuItemBaseModel} from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  sampleItem: MenuItemBaseModel;

  constructor() { }

  ngOnInit() {
  }

  getMenuItems() {
    this.sampleItem.id = 1;
    this.sampleItem.type = 1;
    this.sampleItem.name = 'Sheesha';
    this.sampleItem.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleItem.imageUrl = 'https://www.pinclipart.com/picdir/big/7-70187_free-hookah-cliparts-download-free-clip-art-free.png';
  }
}
