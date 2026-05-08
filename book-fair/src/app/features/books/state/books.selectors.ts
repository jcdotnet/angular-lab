import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from '../models/book.model';

// export const selectBooksState = (state: {books: BooksState}) => state.books; // manual
export const selectBooksState = createFeatureSelector<BooksState>('books');

// export const selectBooks = (state: {books: BooksState}) => selectBooksStateManual(state).items; // manual
export const selectBooks = createSelector(
  selectBooksState,
  (state) => state.items
);

export const selectStands = createSelector(
  selectBooksState,
  (state) => state.stands
);

export const selectStandsWithBooks = createSelector(
  selectStands,
  selectBooks,
  (stands, books) => stands.map(stand => ({
    ...stand,
    books: books.filter(book => book.standId === stand.id)
  }))
);

export const selectBooksInStock = createSelector(
  selectBooks,
  (books) => books.filter(book => book.stock > 0)
);