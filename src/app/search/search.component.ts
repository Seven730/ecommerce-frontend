import { ListComponent } from './../list/list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  value: string = '';

  constructor(private list: ListComponent) {}

  setUrl(search: string): void {
    this.list.getBookList(search, '');
  }

  cancelSearch(): void {
    this.value = '';
    this.list.getBookList(this.value, '');
  }

  ngOnInit(): void {
    this.list.getBookList(this.value, '');
  }
}
