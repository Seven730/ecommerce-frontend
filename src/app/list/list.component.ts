import { SearchComponent } from './../search/search.component';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IListComponent {
  bookList: string[];
  url: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements IListComponent {
  bookList;
  url = 'http://127.0.0.1:8000/api/books/?format=json';

  constructor(http: HttpClient) {
    // console.log(search.value);
    this.bookList = http.get(this.url);
  }

  handleAddToCart(bookTitle) {
    alert(`Książka ${bookTitle} dodana do koszyka!`);
  }
}
