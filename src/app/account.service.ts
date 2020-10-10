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
  private loginURL: string = 'http://localhost:8000/api/users/login/';
  private registerURL: string = 'http://localhost:8000/api/users/';
  private logoutURL: string = 'http://localhost:8000/api/users/me/';
  constructor(private router: Router, private http: HttpClient) {}

  register(
    email: string,
    username: string,
    password: string
  ): Observable<User> {
    return this.http.post<any>(this.registerURL, { email, username, password });
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<any>(this.loginURL, {
      username,
      password,
    });
  }

  logout(): void {
    this.http.get(this.logoutURL, {
      headers: { ['Authorization: ']: localStorage.getItem('token') },
    });
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    window.location.reload();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
