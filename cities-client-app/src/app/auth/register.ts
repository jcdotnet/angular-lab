import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { RegisterModel } from './register.model';

function equalPasswords(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    if (control.get(controlName1)?.value === control.get(controlName2)?.value) {
      return null;
    }
    control.get(controlName2)?.setErrors({ passwordsNotEqual: { valid: false } });
    return { passwordsNotEqual : true}
  }
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', {
       validators: [Validators.required]
    }),
    email: new FormControl('', {
       validators: [Validators.required, Validators.email],
    }),
    phoneNumber: new FormControl('', {
       validators: [Validators.required]
    }),  
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
  }, {
    validators: [equalPasswords('password', 'confirmPassword')]
  });
  formSubmitted = false;

  get nameIsEmpty() {
    return (this.form.controls.name.touched || this.formSubmitted)
      && this.form.controls.name.invalid;
  }
  get emailIsEmpty() {
    return (this.form.controls.email.touched || this.formSubmitted)
      && this.form.controls.email.errors?.['required'];
      //&& this.form.controls.email.invalid;
  }
  get emailIsInvalid() {
    return (this.form.controls.email.touched || this.formSubmitted)
      && this.form.controls.email.errors?.['email'];
      //&& this.form.controls.email.invalid;
  }
  get phoneIsEmpty() {
    return (this.form.controls.phoneNumber.touched || this.formSubmitted)
      && this.form.controls.phoneNumber.invalid;
  }
  get passwordIsEmpty() {
    return (this.form.controls.password.touched || this.formSubmitted)
      && this.form.controls.password.errors?.['empty'];
  }
  get confirmPasswordIsEmpty() {
    return (this.form.controls.confirmPassword.touched || this.formSubmitted)
      && this.form.controls.confirmPassword.errors?.['empty'];
  }

  get passwordsDoNotMatch() {
    return (this.form.controls.confirmPassword.touched || this.formSubmitted)
      && this.form.controls.confirmPassword.errors?.['passwordsNotEqual'];
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.form.valid) {
      this.authService.register(this.form.value as RegisterModel).subscribe({
        next: (response) => {
          console.log(response);
          this.authService.currentUserName.set(response.email);
          this.form.reset();
          this.formSubmitted = false;

          localStorage['token'] = response.token;
          localStorage['refreshToken'] = response.refreshToken;

          this.router.navigate(['/cities']);
        },
        error: (error) => {
          console.log(error); // error.message
        },
      });
    }
  }
}
