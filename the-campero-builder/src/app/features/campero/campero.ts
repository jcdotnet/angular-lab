import { Component, computed } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { ToastingPickerComponent } from './components/toasting-picker/toasting-picker';
import { promoCodeValidator } from './validators/promo.validator';

import { INGREDIENTS } from './data/ingredients';

@Component({
  selector: 'app-campero',
  imports: [
    ReactiveFormsModule,
    CurrencyPipe,
    ToastingPickerComponent
  ],
  templateUrl: './campero.html',
  styleUrl: './campero.scss',
})
export default class CamperoComponent {

  readonly ingredients = INGREDIENTS.filter(i => !i.isDefault && i.price >= 2);
  readonly extraIngredients = INGREDIENTS.filter(i => !i.isDefault && i.price < 2);

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
    promoCode: new FormControl('', {
      asyncValidators: [promoCodeValidator()],
      updateOn: 'blur' //
    })
  });

  formValue = toSignal(this.camperoForm.valueChanges);
  promoStatus = toSignal(this.promo.statusChanges);

  totalPrice = computed(() => {
    const CAMPERO_BASICO = 3.50;

    const formValues = this.formValue();
    if (!formValues) return 3.50;

    const ingredient = INGREDIENTS.find(i => i.id === formValues.ingredient)?.price || 0;
    const extras = (formValues.extras || []).reduce((acc, id) => {
      const extra = INGREDIENTS.find(e => e.id === id);
      return acc + (extra?.price || 0);
    }, 0);

    const subtotal = CAMPERO_BASICO + ingredient + extras;

    if (this.promoStatus() === 'VALID' && this.promo.value) return subtotal * 0.8;
    return subtotal;
  });

  get customer() {
    return this.camperoForm.controls.customerName;
  }
  get customerIsInvalid() {
    return this.camperoForm.controls.customerName.touched &&
      this.camperoForm.controls.customerName.invalid &&
      this.camperoForm.controls.customerName.dirty;
  }
  get extras() {
    return this.camperoForm.controls.extras;
  }
  get ingredient() {
    return this.camperoForm.controls.ingredient;
  }
  get promo() {
    return this.camperoForm.controls.promoCode;
  }
  get promoIsInvalid() {
    return this.promo.dirty && this.promo.hasError('promoNotFound');
  }
  get promoIsValid() {
    return this.promo.valid && this.promo.value;
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