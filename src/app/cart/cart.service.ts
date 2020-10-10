import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return 'B O O K S';
  }

  removeBook() {}

  addBook() {}
}
