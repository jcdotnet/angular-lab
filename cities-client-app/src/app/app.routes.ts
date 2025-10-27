import { Routes } from '@angular/router';
import { Cities } from './cities/cities';
import { Login } from './auth/login';
import { Register } from './auth/register';

export const routes: Routes = [
	{
		path: 'cities',
		component: Cities
	},
	{
		path: 'login',
		component: Login
	},
	{
		path: 'register',
		component: Register
	}
];
