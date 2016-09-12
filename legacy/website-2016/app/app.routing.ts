import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ServicesComponent } from './services.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServicesComponent }, 
    { path: 'projects', component: ProjectsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);