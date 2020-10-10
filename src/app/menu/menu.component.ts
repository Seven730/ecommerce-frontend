import { ListComponent } from './../list/list.component';
import { GenresService } from './genres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  public genres: string[];

  constructor(private service: GenresService, private list: ListComponent) {}

  ngOnInit(): void {
    this.service
      .getGenres()
      .subscribe((data) => ((this.genres as any) = Object.values(data)));
  }

  setUrl(genre: string): void {
    this.list.getBookList('', genre.slice(0, 1));
  }
}
