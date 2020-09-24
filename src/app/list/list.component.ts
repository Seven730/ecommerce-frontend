import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IListComponent {
  header: string;
  bookList: string[];
  url: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements IListComponent {
  header = 'Lista';
  bookList;
  url = 'http://127.0.0.1:8000/api/book/?format=json';

  constructor(http: HttpClient) {
    this.bookList = http.get(this.url);
  }
}
