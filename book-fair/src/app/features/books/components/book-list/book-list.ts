import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BooksState } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  imports: [AsyncPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookListComponent {
   private store = inject(Store);

   books$ = this.store.select((state: {books:BooksState}) => state.books.items);
}
