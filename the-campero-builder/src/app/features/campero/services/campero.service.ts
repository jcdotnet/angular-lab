import { Injectable, signal } from '@angular/core';
import { CamperoOrder } from '../models/campero.model';
import { INGREDIENTS } from '../data/ingredients';

@Injectable({
  providedIn: 'root',
})
export class CamperoService {
  order = signal<CamperoOrder | null>(null);

  calculatePrice(ingredient: string, extras: string[], hasPromo: boolean): number {

    const CAMPERO_BASICO = 3.50;
    
    const ingredientPrice = INGREDIENTS.find(i => i.id === ingredient)?.price || 0;
    const extrasPrice = (extras || []).reduce((acc, id) => {
      const extra = INGREDIENTS.find(e => e.id === id);
      return acc + (extra?.price || 0);
    }, 0);

    const subtotal = CAMPERO_BASICO + ingredientPrice + extrasPrice;
    return hasPromo ? subtotal * 0.8 : subtotal;
  }

  setOrder(order: CamperoOrder) {
    this.order.set(order);
  }

  resetOrder() {
    this.order.set(null);
  }
}
