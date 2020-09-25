import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  url: string = 'http://localhost:8000/api/book/genres/?format=json';
  menu: any;
  constructor(http: HttpClient) {
    this.menu = http.get(this.url);
    console.log(this.menu);
  }
}
