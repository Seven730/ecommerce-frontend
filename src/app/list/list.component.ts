import { ListService } from './list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent {
  title: string = 'Lista';
  courses: any;

  constructor(service: ListService) {
    this.courses = service.getList();
  }
}
