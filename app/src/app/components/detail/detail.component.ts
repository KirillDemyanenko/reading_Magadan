import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import books from '../../books.json';
import { Book } from '../../types';
import { TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiMarkerIconModule,
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  bookInfo = {} as Book;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.bookInfo =
        books.books.filter((val: Book) => val.isbn13 === params['id']).at(0) ??
        ({} as Book);
    });
  }
}
