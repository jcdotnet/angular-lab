import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ServicesComponent } from './services.component';

// router
import { routing } from './app.routing';

@NgModule({
    imports:      [ BrowserModule, routing],
    declarations: [ AppComponent, HomeComponent, ProjectsComponent, ServicesComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }