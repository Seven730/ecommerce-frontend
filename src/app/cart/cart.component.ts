import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  public cart: any;
  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.cart = this.service.getBooks();
  }

  removeBook(): void {
    this.service.removeBook();
    this.cart = this.service.getBooks();
  }
}
