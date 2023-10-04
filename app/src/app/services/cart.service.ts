import { Injectable } from '@angular/core';
import { Book, CartItem } from '../types';
import books from '../books.json';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = [] as CartItem[];
  cartPrice = 0;
  cartAmount = 0;
  addToCart(bookId: string, quantity: number) {
    if (this.cart.filter(value => value.book.isbn13 === bookId).length === 0) {
      this.cart.push({
        book:
          books.books.filter((val: Book) => val.isbn13 === bookId).at(0) ||
          ({} as Book),
        quantity: quantity,
      });
    } else {
      this.cart.map(value => {
        if (value.book.isbn13 === bookId) {
          value.quantity += quantity;
        }
      });
    }
    this.getCartSum();
  }

  removeFromCart(bookId: string) {
    if (
      this.cart.filter(value => value.book.isbn13 === bookId).at(0)
        ?.quantity === 1
    ) {
      this.cart = this.cart.filter(value => value.book.isbn13 !== bookId);
    } else {
      this.cart = this.cart.map(value => {
        if (value.book.isbn13 === bookId) value.quantity -= 1;
        return value;
      });
    }
    this.getCartSum();
  }

  getCartSum() {
    this.cartPrice = 0;
    this.cartAmount = 0;
    this.cart.forEach(value => {
      this.cartPrice +=
        value.quantity * parseFloat(value.book.price.replace('$', ''));
      this.cartAmount += value.quantity;
    });
    this.cartPrice = parseFloat(this.cartPrice.toFixed(2));
  }
}
