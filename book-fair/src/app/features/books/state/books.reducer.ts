import { createReducer, on } from '@ngrx/store';
import { BooksState } from '../models/book.model';
import { BooksActions } from './books.actions';

const initialState: BooksState = {
  items: [
    // moved to the load books effect
    // {
    //   id: '1',
    //   title: 'La estación del perro',
    //   author: 'Carlos Naza',
    //   year: 2024,
    //   stock: 10
    // },
    // {
    //   id: '2',
    //   title: 'Las siete torres y otros relatos',
    //   author: 'Antonio Mena González',
    //   year: 2023,
    //   stock: 10
    // },
  ],
  stands: [], 
  loading: false,
  error: null
}

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.enter, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(BooksActions.loadBooksSuccess, (state, { books, stands }) => ({
    ...state,
    items: books,
    stands,
    loading: false
  })),
  on(BooksActions.sellBook, (state, { bookId }) => ({
    ...state,
    items: state.items.map(book => book.id === bookId ? { ...book, stock: book.stock - 1 } : book)
  })),
  on(BooksActions.restockBook, (state, { bookId, count }) => ({
    ...state,
    items: state.items.map(book => book.id === bookId ? { ...book, stock: book.stock + count } : book)
  })),
);