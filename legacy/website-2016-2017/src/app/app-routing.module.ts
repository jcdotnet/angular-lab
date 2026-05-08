import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { ProyectosComponent }    from './proyectos/proyectos.component';
import { ServiciosComponent }    from './servicios/servicios.component';
import { ContactoComponent }    from './contacto/contacto.component';
import { CookiesComponent }    from './cookies/cookies.component';
import { PrivacidadComponent }    from './privacidad/privacidad.component';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
    { path: '',   component: HomeComponent },
    { path: 'services', component: ServiciosComponent }, 
    { path: 'projects', component: ProyectosComponent },
    { path: 'contact', component: ContactoComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'privacidad', component: PrivacidadComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}