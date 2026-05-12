import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book, Stand } from '../models/book.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Enter': emptyProps(), // UI

    'Load Books Success': props<{ books: Book[]; stands: Stand[] }>(), // API
    'Load Books Failure': props<{ error: string }>(), 
    
    'Sell Book': props<{ bookId: string }>(), // business
    'Restock Book': props<{ bookId: string; count: number }>(),
  }
});