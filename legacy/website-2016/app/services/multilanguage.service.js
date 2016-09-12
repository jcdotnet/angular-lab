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
var MultiLanguageService = (function () {
    function MultiLanguageService() {
        this.textos = [
            { text: "about", en_GB: "Overview", es_ES: "Resumen" },
            { text: "about-text", en_GB: "Hello everyone! I'm a self-employed software engineer, born and raised in Málaga (Spain) and I'm offering my services all over the world since January 2016. You can contact me either if you need to develop an application (console, desktop, web, mobile...), or have great ideas and need someone to carry them out or just need a programmer for your project. I'm looking forward to hearing from you!", es_ES: "¡Hola a tod@s! Mi nombre es Jose Carlos aunque en el mundo profesional soy conocido como JC. Soy un apasionado de la informática desde pequeño y actualmente tengo el título de Ingeniero Técnico en Informática, obtenido en la Universidad de Málaga en el año 2014. Desde enero del 2016 estoy trabajando como profesional autónomo o 'freelancer' prestando servicios a particulares y empresas."
            },
            { text: "about-me", en_GB: "About me", es_ES: "Sobre mí" },
            { text: "appTitle", en_GB: "Jose Carlos Román Rubio || freelance software developer", es_ES: "Jose Carlos Román Rubio || programador freelance Málaga" },
            { text: "cliente", en_GB: "Client:", es_ES: "Cliente:" },
            { text: "contact", en_GB: "Contact", es_ES: "Contacto" },
            { text: "contactme", en_GB: "Contact me", es_ES: "Contacta conmigo" },
            { text: "description", en_GB: "Description:", es_ES: "Descripción:" },
            { text: "desktop", en_GB: "Windows applications development", es_ES: "Desarrollo de aplicaciones para Windows" },
            {
                text: "desktop-text",
                en_GB: "Almost all kinds of console or desktop Windows applications. Ask me what you would like me to develop and I will customize your own program including database, system or web services access, among many others. (<em> over four years experience in .NET </em>)",
                es_ES: "Desarrollo de casi todo tipo de aplicaciones de consola o de escritorio para Windows. Es decir, programas que hagan lo que tú quieras incluyendo: acceso a bases de datos, al sistema, a servicios Web, etc. (<em> más de 4 años de experiencia en .NET </em>)"
            },
            { text: "hire-me", en_GB: "Things you must know about me", es_ES: "Lo que debes saber antes de contratarme" },
            {
                text: "hire-me-text",
                en_GB: "<ul><li> I received my computer engineering degree in 2014.</li><li> I’m skilled in many languages and technologies and my goal is to apply all that I have learned to help others in any way I can. </li><li> I'm more a programmer than a designer. That being said, I offer both programming and design oriented projects. </li><li> I will always issue you an invoice once the project has been finished.</li><li><em> (only for non-spanish speakers) </em> I'm more comfortable communicating in written English since my speaking level is not so good.</li></ul>",
                es_ES: "<ul><li> Estoy dado alta en Hacienda bajo el epígrafe 764, actividad: 'Diplomados en Informática'.</li><li> Tarifo por proyectos completos o por fases del proyecto, emitiendo siempre factura una vez finalizado el proyecto o una fase de éste.</li><li> Soy un apasionado de la programación y me adapto a casi todas las tecnologías.</li><li> No soy diseñador, por lo que me siento más cómodo con proyectos más orientados a la programación.</li><li> Mis tarifas son económicas y garantizo siempre que sea posible la finalización del proyecto: la satisfacción del cliente es muy importante para mí.</li><li> Mi dedicación a tu idea o proyecto será total desde el primer día hasta que lo finalice.</li><li> En todo momento estaremos comunicados: if you don't speak spanish we can communicate in written English (switch please to English version). </li></ul>"
            },
            { text: "inicio", en_GB: "Home", es_ES: "Inicio" },
            { text: "subtitle", en_GB: "Web, desktop and mobile freelance developer", es_ES: "Programador freelance, desarrollador de aplicaciones informáticas" },
            { text: "language", en_GB: "ESPAÑOL", es_ES: "ENGLISH" },
            { text: "links", en_GB: "Links", es_ES: "Enlaces" },
            { text: "misc", en_GB: "Miscellaneous", es_ES: "Varios" },
            { text: "must-know", en_GB: "Why should you hire me?", es_ES: "¿Por qué contratar a un freelancer?" },
            {
                text: "must-know-text",
                en_GB: "<ul><li> I'm passionate about programming since childhood.</li><li> My rates are low since I'm starting as a freelancer. </li><li> You can count on my total dedication to the project. </li></ul>",
                es_ES: "El trabajador autónomo o freelancer es la solución ideal para particulares o empresas que tengan un proyecto y busquen a un profesional que pueda adaptarse a los horarios y requerimientos del mismo. Un freelancer está continuamente formándose ya que sus ingresos no son fijos y dependen del número de clientes que tengan; por esa razón el freelancer hará un estudio del trabajo y pondrá todos sus conocimientos a la disposición del cliente para sacarlo adelante. Además, contratando a un freelancer estás ayudando a personas emprendedoras que han decidido dedicarse a lo que les gusta."
            },
            { text: "programming", en_GB: "Computer programming", es_ES: "Programación" },
            {
                text: "programming-text",
                en_GB: "Coding help, bug fixing, performance improvement, code migration, software maintenance, etc.",
                es_ES: "Ayuda en tareas de programación, eliminación de errores, migración de código, mejora de rendimiento, etc."
            },
            { text: "other-services", en_GB: "Other", es_ES: "Otros servicios" },
            {
                text: "other-services-text",
                en_GB: "If you think your project doesn't fit with any services mentioned above and it involves some skills I know please contact me so that I can see if I might help you.",
                es_ES: "Si tienes un proyecto y piensas que no encaja con los servicios ofrecidos arriba no dudes en ponerte en contacto conmigo para estudiar su viabilidad."
            },
            { text: "progress", en_GB: "Work in progress", es_ES: "En construcción" },
            { text: "projects", en_GB: "Projects", es_ES: "Proyectos" },
            { text: "projsTitle", en_GB: "Jose Carlos Román Rubio || Projects", es_ES: "Jose Carlos Román Rubio || Proyectos" },
            { text: "servicios", en_GB: "Services", es_ES: "Servicios" },
            { text: "servTitle", en_GB: "Jose Carlos Román Rubio || Desktop, Web & Mobile development", es_ES: "Jose Carlos Román Rubio || Desarrollo de software" },
            { text: "skills", en_GB: "Skills:", es_ES: "Tecnologías:" },
            { text: "web", en_GB: "Web development", es_ES: "Desarrollo Web" },
            {
                text: "web-text",
                en_GB: "<ul><li> Front-end, back-end and full-stack Web development using JavaScript / PHP / .NET. </li><li> SOA-based and REST-based Web services development.</li><li> WordPress development. </li><li> E-commerce websites with PrestaShop and WooCommerce </li></ul>",
                es_ES: "<ul><li> Desarrollo de aplicaciones Web (desde páginas simples hasta todo el full-stack) usando JavaScript, PHP o .NET. </li><li> Creación de APIs (servicios web basados en arquitecturas REST o SOA) para el acceso de aplicaciones a fuentes de datos. </li><li> Desarrollo en WordPress. </li><li> Creación de tiendas online (PrestaShop, WooCommerce). </li></ul>"
            }
        ];
        if (localStorage.getItem("language") === "undefined" || localStorage.getItem("language") === null) {
            localStorage.setItem("language", "es_ES");
        }
        this.language = localStorage.getItem("language"); // localStorage.language;
    }
    MultiLanguageService.prototype.getTextos = function () {
        return this.textos;
    };
    MultiLanguageService.prototype.getTexto = function (texto) {
        for (var i = 0; i < this.textos.length; i++) {
            if (this.textos[i].text == texto) {
                return this.language == 'es_ES' ? this.textos[i].es_ES : this.textos[i].en_GB;
            }
        }
        return "prueba";
    };
    MultiLanguageService.prototype.getLanguage = function () {
        return this.language;
    };
    MultiLanguageService.prototype.setLanguage = function (newLanguage) {
        this.language = newLanguage;
    };
    MultiLanguageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MultiLanguageService);
    return MultiLanguageService;
}());
exports.MultiLanguageService = MultiLanguageService;
//# sourceMappingURL=multilanguage.service.js.map