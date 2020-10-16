import { ListService } from './../list/list.service';
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
  public activeGenre: string;
  public activeCount: number;

  constructor(
    private service: GenresService,
    private listService: ListService,
    private list: ListComponent
  ) {}

  ngOnInit(): void {
    this.service
      .getGenres()
      .subscribe((data) => ((this.genres as any) = Object.values(data)));
    this.activeCount = 0;
  }

  setUrl(genre: string): void {
    if (genre.slice(0, 1) === this.listService.genre) {
      this.listService.genre = '';
    } else {
      this.listService.genre = genre.slice(0, 1);
    }
    this.list.getBookList();
    this.onSelect(genre);
  }

  onSelect(genre: string): void {
    if (this.activeCount > 1 || genre !== this.activeGenre) {
      this.activeCount = 0;
    }
    this.activeGenre = genre;
    this.activeCount++;
  }
}
