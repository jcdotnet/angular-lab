import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { DisableControlDirective } from '../directives/disable-control.directive';

import { AuthService } from '../auth/auth.service';
import { CitiesService } from './cities.service';
import { City } from './city.model';
import { LoginModel } from '../auth/login.model';

@Component({
  selector: 'app-cities',
  imports: [CommonModule, DisableControlDirective, ReactiveFormsModule],
  templateUrl: './cities.html',
  styleUrl: './cities.css',
})
export class Cities {
  private authService = inject(AuthService);
  private citiesService = inject(CitiesService);

  cities = signal<City[]>([]);
  //error = signal('');

  cityForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    })
  });
  cityFormSubmitted = false;
  citiesForm = new FormGroup({
    cities: new FormArray([])
  });
  editCityId: string | null = null;

  getCities() {
    this.citiesService.getCities().subscribe({
      next: (responseData) => {
        this.cities.set(responseData);
        this.cities().forEach(city => {
          (this.citiesForm.get('cities') as FormArray).push(
            new FormGroup({
              id: new FormControl(city.id, {
                validators: [Validators.required]
              }),
              name: new FormControl({ value: city.name, disabled: true }, {
                validators: [Validators.required]
              }),
            })
          );
        });
      },
      error: (error) => {
        console.log(error.message); //this.error.set(error.message);
      },
    });
  }

  ngOnInit() {
    this.getCities();
  }

  onSubmit() {
    this.cityFormSubmitted = true;

    this.citiesService.addCity(this.cityForm.value as City).subscribe({
      next: (responseData) => {
        this.cities.update(values =>
          [
            ...values,
            {
              id: responseData.id,
              name: responseData.name
            }
          ]
        );
        this.cityForm.reset();
        this.cityFormSubmitted = false;
      },
      error: (error) => {
        console.log(error.message); //this.error.set(error.message);
      },
    });
  }

  onEdit(city: City): void {
    this.editCityId = city.id;
  }

  onUpdate(i: number): void {
    this.citiesService.updateCity(
      (this.citiesForm.get('cities') as FormArray).controls[i].value
    ).subscribe({
      next: (response: string) => {
        //console.log(response); // null
        this.editCityId = null;

        (this.citiesForm.get('cities') as FormArray).controls[i].reset(
          (this.citiesForm.get('cities') as FormArray).controls[i].value
        );
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onDelete(city: City, i: number): void {
    if (confirm(`Are you sure you want to delete ${city.name}?`)) {
      this.citiesService.deleteCity(city.id).subscribe({
        next: (response: string) => {
          console.log(response);

          (this.citiesForm.get('cities') as FormArray).removeAt(i);
          this.cities().splice(i, 1);
        },
        error: (error: any) => {
          console.log(error);
        },
      })
    }
  }

  // refresh should be done automatically (e.g. after listing)
  // or we can use a middleware to check the expiration
  // we are using a button here for this demo project
  onRefresh() {
    this.authService.generateNewToken().subscribe({
      next: (response: LoginModel) => {
        localStorage['token'] = response.token;
        localStorage['refreshToken'] = response.refreshToken;

        this.getCities();
      },
      error: (error: any) => { console.log(error); }
    });
  }
}