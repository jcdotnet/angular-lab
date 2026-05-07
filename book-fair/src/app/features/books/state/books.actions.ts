import { createAction, props } from "@ngrx/store";

export const sellBook = createAction(
  '[Books] Sell Book',           
  props<{ bookId: string }>()  // payload
);