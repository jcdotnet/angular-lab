import { createActionGroup, props } from "@ngrx/store";

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Sell Book': props<{ bookId: string }>(),
    'Restock Book': props<{ bookId: string; count: number }>(),
  }
});