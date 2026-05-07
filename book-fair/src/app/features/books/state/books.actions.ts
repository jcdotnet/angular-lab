import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../models/book.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Enter': emptyProps(), // UI

    'Load Books Success': props<{ books: Book[] }>(), // API
    
    'Sell Book': props<{ bookId: string }>(), // business
    'Restock Book': props<{ bookId: string; count: number }>(),
  }
});