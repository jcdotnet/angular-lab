import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    providers: [
      provideState({ name: 'books', reducer: booksReducer })
    ],
    loadComponent: () => import('./components/book-list/book-list').then(c => c.BookListComponent)
  }
];