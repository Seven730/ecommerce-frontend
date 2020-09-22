import { ListService } from './list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent {
  header: string = 'Lista';
  bookList: any;

  constructor(service: ListService) {
    this.bookList = service.getList();
  }
}
