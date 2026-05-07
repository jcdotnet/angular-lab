import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { booksReducer } from './state/books.reducer';
import { BooksEffects } from './state/books.effects';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideState({ name: 'books', reducer: booksReducer }),
      provideEffects(BooksEffects)
    ],
    loadComponent: () => import('./components/book-list/book-list').then(c => c.BookListComponent)
  }
];