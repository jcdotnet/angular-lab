import { Component } from '@angular/core';

// servicios
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from '../../services/multilanguage.service'; 


@Component({
    templateUrl: 'home.component.html', 
})

export class HomeComponent {
        
    randomService: String;
    interval: Number; 

    constructor(private titleService : Title, private multiLanguageService: MultiLanguageService)
    {
        this.titleService.setTitle(this.getTexto('appTitle'));
        this.randomService = this.getTexto('randomService' + (Math.floor(Math.random() * 30) + 1));
        this.interval = setInterval(()=> {
            this.randomService = this.getTexto('randomService' + (Math.floor(Math.random() * 30) + 1));
        }, 3000);
    }
    
    
    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }
    
}