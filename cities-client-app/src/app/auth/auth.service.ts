import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel } from './login.model';
import { RegisterModel } from './register.model';

const API_BASE_URL = 'https://localhost:7090/api/account/';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private httpClient = inject(HttpClient);

	currentUserName = signal<string|null|undefined>(null);

	login(user: LoginModel) {
		return this.httpClient.post<LoginModel>(
			API_BASE_URL + 'login',
			user
		);
	}

	register(user: RegisterModel) {
		return this.httpClient.post<RegisterModel>(
			API_BASE_URL + 'register',
			user
		);
	}

	logout() {
		return this.httpClient.get(
			API_BASE_URL + 'logout',
		);
	}

	generateNewToken() {
		const token = localStorage['token'];
		const refreshToken = localStorage['refreshToken'];
		return this.httpClient.post<LoginModel>(
			API_BASE_URL + 'generate-new-jwt-token',
			{
				token, refreshToken
			}
		);
	}
}