import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IGenresService {
  url: string;
}

interface IGenre {
  genre: string;
}

@Injectable({
  providedIn: 'root',
})
export class GenresService implements IGenresService {
  url = 'http://localhost:8000/api/books/genres/?format=json';

  constructor(private http: HttpClient) {}

  getGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.url);
  }
}
