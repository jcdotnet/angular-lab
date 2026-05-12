import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BooksActions } from '../../state/books.actions';
import { selectBooksError, selectStandsWithBooks } from '../../state/books.selectors';

@Component({
  selector: 'app-book-list',
  imports: [AsyncPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookListComponent implements OnInit {
  private store = inject(Store);

  stands$ = this.store.select(selectStandsWithBooks);
  error$ = this.store.select(selectBooksError);

  ngOnInit(): void {
    this.store.dispatch(BooksActions.enter());
  }

  onSell(id: string) {
    this.store.dispatch(BooksActions.sellBook({ bookId: id }));
  }
}
