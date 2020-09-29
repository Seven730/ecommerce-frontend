import { GenresService } from './genres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  public genres: [];

  constructor(private service: GenresService) {}

  ngOnInit() {
    this.service
      .getGenres()
      .subscribe((data) => ((this.genres as any) = Object.values(data)));
  }

  setUrl(genre: string) {
    alert(`Zmieniono gatunek na ${genre}`);
  }
}
