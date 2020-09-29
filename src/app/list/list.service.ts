import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IListComponent {
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ListService implements IListComponent {
  constructor(private http: HttpClient) {}

  getList(url) {
    return this.http.get(url);
  }
}
