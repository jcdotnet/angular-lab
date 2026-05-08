import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';

import { MultiLanguageService } from '../services/multilanguage.service';
import { ProjectsService } from '../services/projects.service';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProyectosComponent,
        ServiciosComponent,
        ContactoComponent,
        PageNotFoundComponent,
        PrivacidadComponent,
        CookiesComponent,
        CookieConsentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [MultiLanguageService, ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
