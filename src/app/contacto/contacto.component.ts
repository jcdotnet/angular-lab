import { Component } from '@angular/core';

// servicios
import { Title }     from '@angular/platform-browser';
import { MultiLanguageService } from '../../services/multilanguage.service'; 
import { ContactService } from '../../services/contact.service'; 

import { Contacto } from './contacto'; 

@Component({
    templateUrl: 'contacto.component.html', 
    styleUrls: ['./contacto.component.css'],
    providers: [ContactService]
})

export class ContactoComponent {
      
   
    contacto: Contacto;
    
    errorMessage: string;
    submitted = false;

    constructor(private titleService : Title, private contactService : ContactService, private multiLanguageService: MultiLanguageService)
    {
        this.titleService.setTitle(this.getTexto('contact-title'));
        this.contactService.initializeSubjects([this.getTexto('consulta'), this.getTexto('presupuesto'), this.getTexto('sugerencia'), this.getTexto('other')]);
        this.newContact();
    }
    
    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }

    onSubmit() {
        //enviamos email 
        this.contactService.sendEmail(this.contacto)
                     .subscribe(
                        response  => this.handleResponse(response));        
        
    }
    
    private handleResponse(response)
    {   
        if(response.status == 200){
            this.submitted = true; 
             //this.message = {name: '', email: '', message: ''};
             //alert('Danke für deine Nachricht');
        }
        else
        {
            this.errorMessage = "Error al enviar el mensaje";  
        }
    }
        
    newContact() {
        this.contacto = { nombre: '', email: '', asunto: '', cuerpo: ''};  
    }
        
}