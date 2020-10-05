import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {}

  register(email: string, username: string, password: string) {}

  login(username: string, password: string) {
    if (username && password) {
      return this.http.post<any>('http://localhost:8000/api/users/login/', {
        username,
        password,
      });
    } else alert('Podaj poprawne dane!');
  }

  logout() {}
}
