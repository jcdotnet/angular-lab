import { effect, Injectable, signal } from '@angular/core';
import { CamperoOrder } from '../models/campero.model';
import { INGREDIENTS } from '../data/ingredients';

const LOCAL_STORAGE_KEY = 'campero_order';

@Injectable({
  providedIn: 'root',
})
export class CamperoService {
  order = signal<CamperoOrder | null>(this.loadFromStorage());

  calculatePrice(ingredient: string, extras: string[], hasPromo: boolean): number {

    const CAMPERO_BASICO = 3.50; // TO-DO: to import from external file 

    const ingredientPrice = INGREDIENTS.find(i => i.id === ingredient)?.price || 0;
    const extrasPrice = (extras || []).reduce((acc, id) => {
      const extra = INGREDIENTS.find(e => e.id === id);
      return acc + (extra?.price || 0);
    }, 0);

    const subtotal = CAMPERO_BASICO + ingredientPrice + extrasPrice;
    return hasPromo ? subtotal * 0.8 : subtotal;
  }

  constructor() {
    effect(() => {
      if (this.order()) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.order()));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    });
  }

  loadFromStorage(): CamperoOrder | null {
    try {
      const fromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
      return fromStorage ? JSON.parse(fromStorage) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  resetOrder() {
    this.order.set(null);
  }

  setOrder(order: CamperoOrder) {
    this.order.set(order);
  }
}
