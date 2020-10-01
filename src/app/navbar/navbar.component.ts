import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  constructor() {}

  handleScrollToTheTop() {
    const element = document.querySelector('app-navbar');
    if (element)
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'start',
      });
  }
}
