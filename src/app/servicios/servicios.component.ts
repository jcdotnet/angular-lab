import { Component } from '@angular/core';

// services
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from '../../services/multilanguage.service';

@Component({
    templateUrl: './servicios.component.html', 
})

export class ServiciosComponent {
    
    logosWeb: string[];
    logosWP: string[];

    constructor(private titleService: Title, private multilanguageService: MultiLanguageService)
    {
        this.titleService.setTitle(this.getTexto('servTitle'));
    }
    
    getTexto(texto: string)
    {    
        return this.multilanguageService.getTexto(texto);
    }
}