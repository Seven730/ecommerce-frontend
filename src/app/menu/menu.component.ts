import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IMenuComponent {
  url: string;
  menu: any;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements IMenuComponent {
  url = 'http://localhost:8000/api/book/genres/?format=json';
  menu;
  constructor(http: HttpClient) {
    this.menu = http.get(this.url);
    console.log(this.menu);
  }
}
