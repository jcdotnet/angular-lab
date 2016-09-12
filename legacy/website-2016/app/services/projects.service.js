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
var ProjectsService = (function () {
    function ProjectsService() {
        this.projects = [
            { nombre: 'Varios', name: 'Miscellaneous', descripcion: 'Proyectos en diferentes tecnologías dirigidos a particulares y empresas', description: 'Projects covering several technologies targeted to companies and individual clients', tecnologias: 'N/A', cliente: '2 clientes felices', fechaInicio: '2016-01-01', fechaFin: null, freelance: "true" },
            { nombre: 'Aplicación Web', name: 'Web application', descripcion: 'Migración de mi web personal a Angular 2 (y actualizada a la versión final).', description: 'Website migration from HTML, CSS and JS to Angular 2 (October 4th: updated to final version).', tecnologias: 'HTML, JavaScript, Bootstrap, Angular2', cliente: 'JC', fechaInicio: '2016-09-02', fechaFin: '2016-09-06', freelance: false },
            { nombre: 'Aplicación Windows', name: 'Windows application', descripcion: 'Aplicación de escritorio, sector salud.', description: 'Healthcare desktop application.', tecnologias: '.NET, WPF, MySQL, Business Intelligence', cliente: 'CIMA diagnostic, particular', fechaInicio: '2016-01-01', fechaFin: '2016-09-01', freelance: true },
            { nombre: 'Desarrollo en WordPress', name: 'WordPress development', descripcion: 'Cambios y corrección de errores en plugins existentes en WordPress', description: 'Existing WordPress plugins adaptation to client needs', tecnologias: 'HTML, CSS, PHP, WordPress', cliente: 'clientes felices', fechaInicio: '2015-11-14', fechaFin: '2016-02-29', freelance: false },
            { nombre: 'Aplicación Android', name: 'Android application', descripcion: 'Aplicación que permite a las parejas tener un registro de sus momentos especiales.', description: 'Couples oriented application wich allows them record their memories', tecnologias: 'Java, Android, PHP, REST, MySQL', cliente: 'particular', fechaInicio: '2015-10-30', fechaFin: '2015-12-09', freelance: false },
            { nombre: 'Aplicación Windows', name: 'Windows Application', descripcion: 'Aplicación de escritorio', description: 'Desktop application.', tecnologias: '.NET, WPF, WCF, PHP, MySQL', cliente: 'J&A', fechaInicio: '2014-09-01', fechaFin: '2014-11-29', freelance: false },
            { nombre: 'App mensajería', name: 'Messenger app', descripcion: 'Aplicación multiplataforma que permite comunicación via voz, chat y talkie', description: 'MultiPlatform service where you have phone, talkie and IM.', tecnologias: '.NET, WPF, WCF, PHP, MySQL', cliente: 'BOLT startup', fechaInicio: '2014-06-16', fechaFin: '2014-08-28', freelance: false },
            { nombre: 'SW entrenamiento deportivo', name: 'Sports training software', descripcion: 'Aplicación que ayuda a gestionar el entrenamiento del deportita profesional.', description: 'Desktop application which helps the trainer to manage a professional athlete training', tecnologias: '.NET, winForms, web services, SQL Server', cliente: 'Universidad de Málaga, Universidad de Vigo', fechaInicio: '2012-10-01', fechaFin: '2015-03-03', freelance: false }
        ];
    }
    ProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map