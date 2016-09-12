import { Component } from '@angular/core';

// services
import { Title }     from '@angular/platform-browser';
import { ProjectsService } from './services/projects.service'; 
import { MultiLanguageService } from './services/multilanguage.service'; 

// router
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    templateUrl: 'views/projects.html',
    //directives: [ROUTER_DIRECTIVES],
    providers: [ProjectsService]
})

export class ProjectsComponent {
    
    private projects;
    
    constructor(private titleService : Title, private projectsService: ProjectsService, private multiLanguageService: MultiLanguageService)
    {
        this.projects = this.projectsService.getProjects();
        this.titleService.setTitle(this.getTexto('projsTitle'));
    }
    
    getLanguage()
    {
        return this.multiLanguageService.getLanguage();
    }
    
    getTexto(texto: string)
    {    
        return this.multiLanguageService.getTexto(texto);
    }
}