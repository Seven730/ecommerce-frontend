import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent {
  constructor() {}

  handleBrowseBooks() {
    const element = document.querySelector('#book-list');
    if (element)
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'start',
      });
  }
}
