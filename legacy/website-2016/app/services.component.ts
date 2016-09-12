import { Component } from '@angular/core';

// services
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from './services/multilanguage.service'; 

// router
//import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'views/services.html',
    //directives: [ROUTER_DIRECTIVES] 
})

export class ServicesComponent {
    
    constructor(private titleService: Title, private multilanguageService: MultiLanguageService)
    {
        this.titleService.setTitle(this.getTexto('servTitle'));
    }
    
    getTexto(texto: string)
    {    
        return this.multilanguageService.getTexto(texto);
    }
}