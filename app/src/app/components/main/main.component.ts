import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import books from '../../books.json';
import { Book } from '../../types';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tuiIconSearch } from '@taiga-ui/icons';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiBlockStatusModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  protected books: Book[] = books.books;
  isPriceSortAsc = true;
  isTitleAsc = true;
  readonly searchForm = new FormGroup({
    text: new FormControl(),
  });
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  sortBooksByPrice() {
    this.books.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return this.compare(priceA, priceB, this.isPriceSortAsc);
    });
    this.isPriceSortAsc = !this.isPriceSortAsc;
  }

  filterBooks(ev: Event) {
    this.books = books.books;
    this.books = this.books.filter(value => {
      return (
        value.title
          .toLowerCase()
          .includes(this.searchForm.value.text.toLowerCase()) ||
        value.subtitle
          .toLowerCase()
          .includes(this.searchForm.value.text.toLowerCase())
      );
    });
  }

  sortBooksByTitle() {
    this.books.sort((a, b) => {
      return this.compare(a.title, b.title, this.isTitleAsc);
    });
    this.isTitleAsc = !this.isTitleAsc;
  }

  protected readonly tuiIconSearch = tuiIconSearch;
}
