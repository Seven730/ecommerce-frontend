import { ListService } from './../list/list.service';
import { ListComponent } from './../list/list.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  value: string = '';

  constructor(private listService: ListService, private list: ListComponent) {}

  setUrl(search: string): void {
    this.listService.search = search;
    this.list.getBookList();
  }

  cancelSearch(): void {
    this.value = '';
    this.listService.search = '';
    this.list.getBookList();
  }
}
