import { Component, computed } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { INGREDIENTS, TOASTING_OPTIONS } from './data/ingredients';

@Component({
  selector: 'app-campero',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe
  ],
  templateUrl: './campero.html',
  styleUrl: './campero.scss',
})
export default class CamperoComponent {

  readonly ingredients = INGREDIENTS.filter(i => !i.isDefault && i.price >= 2);
  readonly extraIngredients = INGREDIENTS.filter(i => !i.isDefault && i.price < 2);
  readonly toastingLevels = TOASTING_OPTIONS;

  camperoForm = new FormGroup({
    customerName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)]
    }),
    baseIngredients: new FormGroup({
      york: new FormControl(true),
      lettuce: new FormControl(true),
      tomato: new FormControl(true),
      mayo: new FormControl(true)
    }),
    ingredient: new FormControl('', {
      validators: [Validators.required]
    }),
    toastingLevel: new FormControl(2, { // dorado
      validators: [Validators.required]
    }),
    extras: new FormArray<FormControl<string>>([]),
    promoCode: new FormControl('')
  });

  formValue = toSignal(this.camperoForm.valueChanges, {
    initialValue: this.camperoForm.getRawValue()
  });

  totalPrice = computed(() => {
    const CAMPERO_BASICO = 3.50;
    const form = this.formValue();

    const ingredient = INGREDIENTS.find(i => i.id === form.ingredient)?.price || 0;
    const extras = (form.extras || []).reduce((total, id) => {
      const extra = INGREDIENTS.find(e => e.id === id);
      return total + (extra?.price || 0);
    }, 0);
    return CAMPERO_BASICO + ingredient + extras;
  });

  get customerIsInvalid() {
    return this.camperoForm.controls.customerName.touched &&
      this.camperoForm.controls.customerName.invalid &&
      this.camperoForm.controls.customerName.dirty;
  }
  get extras() {
    return this.camperoForm.controls.extras;
  }

  addExtra(id: string): void {
    if (!this.extras.value.includes(id))
      this.extras.push(new FormControl(id, { nonNullable: true }));
  }

  removeExtra(index: number): void {
    this.extras.removeAt(index);
  }

  onSubmit() {
    console.log(this.camperoForm);
  }
}
