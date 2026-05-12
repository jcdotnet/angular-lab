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
          stands: [
            { id: '1', name: 'Colectivo Malagueño de Escritores', location: 'Casetas 11-13' },
            { id: '2', name: 'Asoc. Generación del 22', location: 'Casetas 44-45' },
            { id: '3', name: 'Librería Proteo', location: 'Casetas 47-48' },
            { id: '4', name: 'Librería Luces', location: 'Casetas 59-61' },
            { id: '5', name: 'Casa del Libro', location: 'Casetas 51-52' },
            { id: '6', name: 'UMA Editorial', location: 'Psaeo del Parque' },
          ],
          books: [
            {
              id: '1',
              title: 'La estación del perro',
              author: 'Carlos Naza',
              year: 2024,
              stock: 10,
              standId: '2'
            },
            {
              id: '2',
              title: 'Las siete torres y otros relatos',
              author: 'Antonio Mena González',
              year: 2023,
              stock: 10,
              standId: '1'
            },
            {
              id: '3',
              title: 'Análisis y Diseño de Algoritmos',
              author: 'A. Vallecillo y R. Guerequeta',
              year: 2000,
              stock: 5,
              standId: '6'
            }
          ]
        })),
        catchError((error) => {
          //console.error('', error);
          return of(BooksActions.loadBooksFailure({ 
            error: 'Error al cargar los libros' 
          }));
        })
      )
    )
  ));

}