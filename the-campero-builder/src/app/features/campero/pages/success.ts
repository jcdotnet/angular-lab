import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CamperoService } from '../services/campero.service';
import { INGREDIENTS, TOASTING_OPTIONS } from '../data/ingredients';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-success',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './success.html',
  styleUrl: './success.scss',
})
export default class SuccessComponent {
  private router = inject(Router);
  private service = inject(CamperoService);

  readonly currentDate = new Date();

  order = this.service.order; // ref to signal

  constructor() {
    if (!this.order()) {
      this.router.navigate(['/builder']);
    }
  }
  get breadName() {
    return 'Pan de Campero'; // TO-DO: add bread field to the form
  }

  get extras() {
    return this.order()?.extras.map(id =>
      INGREDIENTS.find(i => i.id === id)?.name
    ).filter(Boolean);
  }

  get toastingLevel() {
    return TOASTING_OPTIONS.find(opt => opt.id === this.order()?.toasting)?.label;
  }
  get totalPrice() {
    const data = this.order();
    if (!data) return 0;

    return this.service.calculatePrice(
      data.ingredient,
      data.extras,
      data.promoCode.length > 0
    );
  }

  onNewOrder() {
    this.service.resetOrder();
    this.router.navigate(['/builder']);
  }
}
