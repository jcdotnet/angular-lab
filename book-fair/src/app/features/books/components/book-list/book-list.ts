import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BooksState } from '../../models/book.model';
import { sellBook } from '../../state/books.actions';

@Component({
  selector: 'app-book-list',
  imports: [AsyncPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookListComponent {
  private store = inject(Store);

  books$ = this.store.select((state: { books: BooksState }) => state.books.items);

  onSell(id: string) {
    this.store.dispatch(sellBook({ bookId: id }));
  }
}
