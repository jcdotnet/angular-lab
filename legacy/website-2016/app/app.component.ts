import { Component } from '@angular/core';

// router
import { Router } from "@angular/router";

// services
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from './services/multilanguage.service'; 

@Component({
    selector: 'my-app',
    templateUrl: '/views/app.html',
    providers: [ Title, MultiLanguageService ]  
})

export class AppComponent { 
    
    date: Date = new Date();
         
    constructor(private router: Router, private titleService: Title, private multilanguageService: MultiLanguageService)
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
        
    }
    
    getTexto(texto: string)
    {
        return this.multilanguageService.getTexto(texto);
    }
    
    setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }
}

