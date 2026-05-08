import { Component } from '@angular/core';

// services
import { Title }     from '@angular/platform-browser';
import { ProjectsService } from './../../services/projects.service'; 
import { MultiLanguageService } from './../../services/multilanguage.service'; 



@Component({
    templateUrl: './proyectos.component.html', 
    providers: [ProjectsService]
})

export class ProyectosComponent {
    
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