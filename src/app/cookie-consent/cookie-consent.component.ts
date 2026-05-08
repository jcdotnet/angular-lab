import { Component, OnInit} from '@angular/core';

import { MultiLanguageService } from '../../services/multilanguage.service'; 
import { CookieService } from '../../services/cookie.service'; 

@Component({
    selector: 'cookie-consent',
    templateUrl: './cookie-consent.component.html',
    styleUrls: ['./cookie-consent.component.css'],
    providers: [CookieService]
})
export class CookieConsentComponent implements OnInit{

    constructor(private cookieService: CookieService, private multiLanguageService: MultiLanguageService) { 
    }

    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }
    
    aceptarCookies(event) {
        event.preventDefault();
        this.cookieService.setCookie("complianceCookie", "1", 365);   
        document.getElementById("cookie-consent").style.display = "none";
    }
    
    ngOnInit() {
        document.getElementById("cookie-consent").style.display = this.cookieService.getCookie("complianceCookie") === "1" ? "none" : "block"; 
    }
}
