import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private requestOptions = {
    headers: new HttpHeaders({
      Authorization: `Token ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<Object> {
    return this.http.get(
      'http://localhost:8000/api/users/me/',
      this.requestOptions
    );
  }

  
}
