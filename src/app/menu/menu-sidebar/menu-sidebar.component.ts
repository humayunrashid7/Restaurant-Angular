import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  opened: boolean

  constructor() {
    this.opened = true;
  }

  ngOnInit() {
  }

}
