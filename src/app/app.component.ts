import { Component, OnInit } from '@angular/core';

// servicios
import { Title } from '@angular/platform-browser';
import { MultiLanguageService } from '../services/multilanguage.service';
import { ContactService } from '../services/contact.service'; 


// router (necesitamos inyectarlo también para cambiar el título)
// NavigationEnd (queremos controlar el scroll cuando la ruta cambie)
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ Title, MultiLanguageService, ContactService ]  
})

export class AppComponent {
    
    date: Date = new Date();
         
    constructor(private router: Router, private titleService: Title, private multilanguageService: MultiLanguageService, private contactService: ContactService)
    {
        this.titleService.setTitle(this.getTexto('appTitle'));        
    }
    
    changeLanguage(newLanguage: string) 
    {
        this.multilanguageService.setLanguage(newLanguage);
        
        if (this.router.url === '/' || this.router.url === '/')
            this.titleService.setTitle(this.getTexto('appTitle'));
        else if (this.router.url === '/services')
            this.titleService.setTitle(this.getTexto('servTitle'));
        else if (this.router.url === '/projects')
            this.titleService.setTitle(this.getTexto('projsTitle'));
        else if (this.router.url === '/contact')
            this.titleService.setTitle(this.getTexto('contact-title'));
        
    
        this.contactService.initializeSubjects([this.getTexto('consulta'), this.getTexto('presupuesto'), this.getTexto('sugerencia'), this.getTexto('other')]);
    }
    
    getTexto(texto: string)
    {
        return this.multilanguageService.getTexto(texto);
    }
    
    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
    
    ngOnInit() {
        this.router.events.subscribe(event => {
        if (!(event instanceof NavigationEnd))
                return;
            window.scrollTo(0, 0);
        });
    }
}
