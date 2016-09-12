"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// services
var platform_browser_1 = require('@angular/platform-browser');
var projects_service_1 = require('./services/projects.service');
var multilanguage_service_1 = require('./services/multilanguage.service');
// router
//import { ROUTER_DIRECTIVES } from '@angular/router';
var ProjectsComponent = (function () {
    function ProjectsComponent(titleService, projectsService, multiLanguageService) {
        this.titleService = titleService;
        this.projectsService = projectsService;
        this.multiLanguageService = multiLanguageService;
        this.projects = this.projectsService.getProjects();
        this.titleService.setTitle(this.getTexto('projsTitle'));
    }
    ProjectsComponent.prototype.getLanguage = function () {
        return this.multiLanguageService.getLanguage();
    };
    ProjectsComponent.prototype.getTexto = function (texto) {
        return this.multiLanguageService.getTexto(texto);
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            templateUrl: 'views/projects.html',
            //directives: [ROUTER_DIRECTIVES],
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title, projects_service_1.ProjectsService, multilanguage_service_1.MultiLanguageService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map