import { createReducer } from '@ngrx/store';
import { BooksState } from '../models/book.model';

const initialState: BooksState = {
  items: [
    {
      id: '1',
      title: 'La estación del perro',
      author: 'Carlos Naza',
      year: 2024,
      stock: 10
    },
    {
      id: '2',
      title: 'Las siete torres y otros relatos',
      author: 'Antonio Mena González',
      year: 2023,
      stock: 10
    },
  ],
  loading: false,
  error: null
}

export const booksReducer = createReducer(
  initialState
);