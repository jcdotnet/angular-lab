import { Component } from '@angular/core';

// services
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from './services/multilanguage.service'; 


@Component({
  templateUrl: 'views/home.html'
  // providers: [MultiLanguageService] // ya está definido en AppComponent, si descomentamos cramos otra instancia
})

export class HomeComponent {
        
    constructor(private titleService : Title, private multiLanguageService: MultiLanguageService)
    {
        this.titleService.setTitle(this.getTexto('appTitle'));
    }
    
    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }
}