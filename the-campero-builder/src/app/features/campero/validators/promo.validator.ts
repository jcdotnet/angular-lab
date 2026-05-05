import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map, of, timer } from "rxjs";

// TO-DO: to move to env/BD
const PROMOS = ['BIZNAGA20', 'CAMPERO_LOVER', 'MALAGA_LA_BELLA'];

// https://angular.dev/api/forms/AbstractControl
// https://angular.dev/api/forms/AsyncValidatorFn
export const promoCodeValidator = (): AsyncValidatorFn => {
    return (control: AbstractControl)=> {
    const code = control.value?.trim().toUpperCase();
    if (!code) return of(null);

    return timer(1000).pipe(
      map(() => PROMOS.includes(code) ? null : { promoNotFound: true })
    );
  };
}