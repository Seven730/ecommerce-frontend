import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';

interface IListComponent {
  bookList: string[];
  url: string;
  message: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements IListComponent, OnInit {
  bookList;
  url = 'http://127.0.0.1:8000/api/books/?format=json';
  message;

  constructor(private service: ListService) {}

  ngOnInit() {
    this.service.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  handleAddToCart(bookTitle) {
    alert(`Książka ${bookTitle} dodana do koszyka!`);
  }

  getBookList() {
    this.service
      .getList(`${this.url}&search=${this.message}`)
      .subscribe((data) => (this.bookList = data));
  }
}