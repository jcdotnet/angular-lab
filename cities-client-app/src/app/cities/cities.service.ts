import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { City } from './city.model';

const API_BASE_URL = 'https://localhost:7090/api/';

@Injectable({
	providedIn: 'root'
})
export class CitiesService {
	private httpClient = inject(HttpClient);

	addCity(city: City) {
		let headers = new HttpHeaders();
		headers = headers.append('Authorization', 
			`Bearer ${localStorage['token']}`
		);
		return this.httpClient.post<City>(
			API_BASE_URL + 'cities',
			city,
			{ headers : headers }
		)
	}

	getCities() {
		let headers = new HttpHeaders();
		headers = headers.append('Authorization', 
			`Bearer ${localStorage['token']}`
		);
		return this.httpClient.get<City[]>(
			API_BASE_URL + 'cities',
			{ headers : headers }
		).pipe(
			catchError((error) => {
				console.log(error);
				return throwError(() => new Error('could not fetch cities'));
			})
		);
	}

	updateCity(city: City) {
		let headers = new HttpHeaders();
		headers = headers.append('Authorization', 
			`Bearer ${localStorage['token']}`
		);
		return this.httpClient.put<string>(
			`${API_BASE_URL}cities/${city.id}`,
			city,
			{ headers : headers }
		)
	}

	deleteCity(id: string | null) {
		let headers = new HttpHeaders();
		headers = headers.append('Authorization', 
			`Bearer ${localStorage['token']}`
		);
		return this.httpClient.delete<string>(
			`${API_BASE_URL}cities/${id}`,
			{ headers : headers }
		)
	}
}