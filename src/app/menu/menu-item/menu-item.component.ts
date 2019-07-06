import { Component, OnInit } from '@angular/core';
import {MenuItemBaseModel} from '../../core/models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  sampleItem: MenuItemBaseModel;

  constructor() {
    this.sampleItem = new MenuItemBaseModel();
    this.sampleItem.id = 1;
    this.sampleItem.type = 1;
    this.sampleItem.name = 'Sheesha';
    this.sampleItem.description = 'Flavoured sheesha (water pipe) with select herbal flavours.';
    this.sampleItem.imageUrl = 'https://i.pinimg.com/originals/d4/f5/cb/d4f5cba2f5067ce39ccf244c31509465.png';
  }

  ngOnInit() {
  }

}
