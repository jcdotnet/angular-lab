import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'builder', 
        pathMatch: 'full' 
    },
    {
        path: 'builder',
        loadComponent: () => import('./features/campero/campero') // lazy loading
    }
];
