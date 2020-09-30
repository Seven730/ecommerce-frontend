import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {}

  getList(url) {
    return this.http.get(url);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
    this.getList(
      `http://127.0.0.1:8000/api/books/?format=json&search=${message}`
    );
  }
}
