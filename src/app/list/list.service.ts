import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  url = 'http://127.0.0.1:8000/api/books/?format=json';
  genre = '';
  search = '';

  constructor(private http: HttpClient) {}

  getList() {
    this.url = `http://127.0.0.1:8000/api/books/?format=json&search=${this.search}&genre=${this.genre}`;
    return this.http.get(this.url);
  }
}
