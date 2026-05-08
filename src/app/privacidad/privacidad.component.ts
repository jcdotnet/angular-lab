import { Component  } from '@angular/core';

import { MultiLanguageService } from './../../services/multilanguage.service'; 
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css']
})

export class PrivacidadComponent {

    constructor(private titleService : Title, private multiLanguageService: MultiLanguageService) { 
       this.titleService.setTitle("Aviso legal y política de privacidad | Jose Carlos Román Rubio");
    }

    
    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }

}