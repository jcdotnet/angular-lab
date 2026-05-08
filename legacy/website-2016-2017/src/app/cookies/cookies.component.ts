import { Component } from '@angular/core';

import { MultiLanguageService } from './../../services/multilanguage.service'; 
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent  {

    constructor(private titleService : Title, private multiLanguageService: MultiLanguageService) { 
       this.titleService.setTitle("Política de cookies | Jose Carlos Román Rubio");
  }


    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }
}
