import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksActions } from './books.actions';
import { catchError, map, of, switchMap, timer } from 'rxjs';

export class BooksEffects {
  private actions$ = inject(Actions);

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksActions.enter),
    switchMap(() =>
      timer(1000).pipe(
        map(() => BooksActions.loadBooksSuccess({
          books: [
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
            }
          ]
        })),
        catchError((error) => {
          // TO-DO: add BooksActions.loadFailure action to handle API errors
          console.error('Error while loading books', error);
          return of({ type: '[Books] Failure' });
        })
      )
    )
  ));

}