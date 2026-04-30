import { Component, forwardRef, signal } from '@angular/core';
import { TOASTING_OPTIONS } from '../../data/ingredients';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toasting-picker',
  imports: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToastingPickerComponent),
    multi: true,
  }],
  template: ` 
    <div class="control-grid">
      @for (option of options(); track option.id) {
        <button 
          type="button" 
          class="control-option" 
          [class.is-active]="value() === option.id"
          (click)="select(option.id)">
          <span class="control-text">{{ option.label }}</span>
          <span class="control-price">{{ option.description }}</span>
        </button>
      }
    </div> `,
  styleUrl: './toasting-picker.scss',
})
export class ToastingPickerComponent implements ControlValueAccessor {

  options = signal(TOASTING_OPTIONS);
  value = signal(2); // tueste dorado! (valor por defecto)

  onChange = (val: number) => {};
  onTouched = () => {};

  writeValue(val: number) { this.value.set(val); }
  
  registerOnChange(fn: (v: number) => void) { this.onChange = fn; }
  registerOnTouched(fn: () => void) { this.onTouched = fn; }

  select(id: number) {
    this.value.set(id);
    this.onChange(id);
    this.onTouched();
  }
}
