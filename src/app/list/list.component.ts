import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: ListService) {}

  handleAddToCart(bookTitle) {
    alert(`Książka ${bookTitle} dodana do koszyka!`);
  }

  getBookList(message) {
    this.service
      .getList(`${this.url}&search=${message}`)
      .subscribe((data) => (this.bookList = data));
  }
}
