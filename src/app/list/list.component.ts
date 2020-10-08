import { AccountService } from './../account.service';
import { ListService } from './list.service';
import { Component, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

interface IListComponent {
  bookList: string[];
  url: string;
  overlayRef: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements IListComponent {
  bookList;
  url = 'http://127.0.0.1:8000/api/books/?format=json';
  overlayRef;

  constructor(
    private service: ListService,
    private account: AccountService,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  handleAddToCart(bookTitle) {
    if (this.account.isLoggedIn()) {
      alert(`Książka ${bookTitle} dodana do koszyka!`);
    } else {
      alert('Aby dodać produkt do koszyka najpierw musisz się zalogować!');
    }
  }

  getBookList(message?: string, genre?: string) {
    if (!message) message = '';
    if (!genre) genre = '';
    console.log(`${this.url}&search=${message}&genre=${genre}`);
    this.service
      .getList(`${this.url}&search=${message}&genre=${genre}`)
      .subscribe((data) => {
        this.bookList = data;
        console.log(this.bookList);
      });
  }

  openWithTemplate(tpl: TemplateRef<any>) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'dark-backdrop',
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const overlayRef = this.overlay.create(configs);
    this.overlayRef = overlayRef;

    overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  onCancel() {
    this.overlayRef.dispose();
  }
}
