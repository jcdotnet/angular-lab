import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  form = new FormGroup({
    email: new FormControl('', {
       validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
  });
  formSubmitted = false;

  get emailIsInvalid() {
    return (this.form.controls.email.touched || this.formSubmitted)
      && this.form.controls.email.invalid;
  }
  get passwordIsInvalid() {
    return (this.form.controls.password.touched || this.formSubmitted)
      && this.form.controls.password.invalid;
  }

  onSubmit() {
    this.formSubmitted= true;

    this.authService.login(this.form.value).subscribe({
      next: (response: LoginModel) => {
        console.log(response)
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
