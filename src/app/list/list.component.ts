import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent {
  title: string = 'Lista';
  courses: string[] = ['Produkt 1', 'Produkt 2', 'Produkt 3'];
}
