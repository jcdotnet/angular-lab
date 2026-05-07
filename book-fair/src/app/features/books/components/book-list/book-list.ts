import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BooksActions } from '../../state/books.actions';
import { selectBooks } from '../../state/books.selectors';

@Component({
  selector: 'app-book-list',
  imports: [AsyncPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookListComponent {
  private store = inject(Store);

  books$ = this.store.select(selectBooks);

  onSell(id: string) {
    this.store.dispatch(BooksActions.sellBook({ bookId: id }));
  }
}
