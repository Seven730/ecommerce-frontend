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
  }
}
