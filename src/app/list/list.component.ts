import { CartService } from './../cart/cart.service';
import { AccountService } from './../account.service';
import { ListService } from './list.service';
import {
  Component,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

interface IListComponent {
  bookList: string[];
  overlayRef: any;
  page: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements IListComponent, OnInit {
  public bookList;
  public overlayRef;
  public page;

  constructor(
    private service: ListService,
    private account: AccountService,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.service.getList().subscribe((data) => {
      this.bookList = data;
    });
  }

  getBookList() {
    this.service.getList().subscribe((data) => {
      this.bookList = data;
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

  handleAddToCart(bookTitle) {
    if (this.account.isLoggedIn()) {
      this.cart.addBook();
      alert(`Książka ${bookTitle} dodana do koszyka!`);
    } else {
      alert('Aby dodać produkt do koszyka najpierw musisz się zalogować!');
    }
  }

  onCancel() {
    this.overlayRef.dispose();
  }
}
