import { Injectable } from '@angular/core'

@Injectable()

export class MultiLanguageService {
    public textos;
    public language;
    
    constructor() {
        this.textos = [
            { text: "about", en_GB: "Overview", es_ES: "Resumen" },            
            { text: "about-text", en_GB: "Hello everyone! I'm a self-employed software engineer, born and raised in Málaga (Spain) and I'm offering my services all over the world since January 2016. You can contact me either if you need to develop an application (console, desktop, web, mobile...), or have great ideas and need someone to carry them out or just need a programmer for your project. I'm looking forward to hearing from you!", es_ES: "¡Hola a tod@s! Mi nombre es Jose Carlos aunque en el mundo profesional soy conocido como JC. Soy un apasionado de la informática desde pequeño y actualmente tengo el título de Ingeniero Técnico en Informática, obtenido en la Universidad de Málaga en el año 2014. Desde enero del 2016 estoy trabajando como profesional autónomo o 'freelancer' prestando servicios a particulares y empresas."
            },
            { text: "about-me", en_GB: "About me", es_ES: "Sobre mí" },
            { text: "appTitle", en_GB: "Freelance software developer | Jose Carlos Román Rubio", es_ES: "Programador freelance en Málaga | Jose Carlos Román Rubio" },
            { text: "asunto", en_GB: "Subject", es_ES: "Asunto" },
            { text: "back", en_GB: "Back", es_ES: "Volver" },
            { text: "consulta", en_GB: "General enquiry", es_ES: "Consulta" },
            { text: "contact-form", en_GB: "Contact form", es_ES: "Formulario de contacto" },
            { text: "cliente", en_GB: "Client:", es_ES: "Cliente:" },
            { text: "clientes", en_GB: "clients", es_ES: "clientes" },
            { text: "contact", en_GB: "Contact", es_ES: "Contacto" },
            { text: "contact-title", en_GB: "Contact form | Jose Carlos Román Rubio", es_ES: "Formulario de contacto | Jose Carlos Román Rubio" },
            { text: "contactme", en_GB: "Contact me", es_ES: "Contacta conmigo" },
            { text: "cookie-consent", en_GB: "This website uses cookies to ensure you get the best experience on our website. ", es_ES: "Este sitio usa cookies. Si continúa navegando consideramos que acepta su uso. " },
            { text: "cookie-consent-ok", en_GB: "Got it!", es_ES: "De acuerdo." },
            { text: "description", en_GB: "Description:", es_ES: "Descripción:" },
            { text: "desktop", en_GB: "Windows applications development", es_ES: "Desarrollo de aplicaciones para Windows" },
            {
                text: "desktop-text",
                en_GB: "<ul><li>Console or desktop Windows applications development.</li><li>Android development using Java and Android studio.</li><li>Android and iOS development using the ionic Framework.</li></ul><p>Applications developed above are customizable and can include database, system or web services access, among many others.</p>",
                es_ES: "<ul><li>Desarrollo de aplicaciones de consola o de escritorio para Windows. </li><li>Desarrollo de aplicaciones Android usando Java y Android Studio.</li><li>Desarrollo de aplicaciones iOS y Android usando angular e ionic.</li></ul><p>Todas estas aplicaciones pueden incluir acceso a datos, al sistema, a servicios Web, a la nube, etc.</p>"
            },
            { text: "email", en_GB: "Email", es_ES: "Correo electrónico" },
            { text: "hire-me", en_GB: "Things you must know about me", es_ES: "Lo que debes saber antes de contratarme" },
            {
                text: "hire-me-text",
                en_GB: "<ul><li> I received my computer engineering degree in 2014.</li><li> I’m skilled in many languages and technologies and my goal is to apply all that I have learned to help others in any way I can. </li><li> I'm more a programmer than a designer. That being said, I offer both programming and design oriented projects. </li><li> I will always issue you an invoice once the project has been finished.</li><li><em> (only for non-spanish speakers) </em> I'm more comfortable communicating in written English since my speaking level is not so good.</li></ul>",
                es_ES: "<ul><li> Estoy dado alta en Hacienda bajo el epígrafe 764, actividad: 'Diplomados en Informática'.</li><li> Tarifo por proyectos completos o por fases del proyecto, emitiendo siempre factura una vez finalizado el proyecto o una fase de éste.</li><li> Soy un apasionado de la programación y me adapto a casi todas las tecnologías.</li><li> No soy diseñador, por lo que me siento más cómodo con proyectos más orientados a la programación.</li><li> Mis tarifas son económicas y garantizo siempre que sea posible la finalización del proyecto: la satisfacción del cliente es muy importante para mí.</li><li> Mi dedicación a tu idea o proyecto será total desde el primer día hasta que lo finalice.</li><li> En todo momento estaremos comunicados: if you don't speak spanish we can communicate in written English (switch please to English version). </li></ul>"
            },
            { text: "home", en_GB: "Home", es_ES: "Inicio" },
            { text: "home-header-title", en_GB: "Get your project done with a freelancer", es_ES: "¿Necesita un profesional para su proyecto?" },
            { text: "home-need-help", en_GB: "Need help?", es_ES: "¿Necesita ayuda?" },
            { text: "learn-more", en_GB: "Learn more", es_ES: "Más información" },
            { text: "inicio", en_GB: "Home", es_ES: "Inicio" },
            { text: "subtitle", en_GB: "Web, desktop and mobile freelance developer", es_ES: "Programador freelance, desarrollador de aplicaciones informáticas"},  
            { text: "language", en_GB: "ESPAÑOL", es_ES: "ENGLISH" },
            { text: "mensaje", en_GB: "Message", es_ES: "Mensaje" },
            { text: "message1-title", en_GB: "Custom services", es_ES: "Servicios a medida" },
            { text: "message1-text", en_GB: "I'm a self-employed software engineer. I work legally and I offer my services to <span class=\"highlighted\"> individuals and companies </span>. My pricing is project based and I will always issue you an invoice once the complete job (or a milestone) has been finished.", es_ES: 'Soy trabajador autónomo (actividad económica IAE: "Diplomados en informática") y ofrezco mis servicios a <span class="highlighted"> particulares y empresas</span>. Tarifo por proyectos completos o por fases del proyecto, emitiendo siempre factura por mi trabajo.'},
            { text: "message2-title", en_GB: "Smart coding", es_ES: "Buenas prácticas" },
            { text: "message2-text", en_GB: "I'm passionate about programming since childhood and I received my computer engineering degree in 2014. Besides, I have enrolled to several courses, I’m skilled in many technologies and I apply the best coding practices.", es_ES: "Soy un apasionado de la programación desde pequeño y tengo la carrera de ingeniería técnica en informática. Además siempre estoy realizando cursos, estoy al día en las últimas tecnologías y las mejores practicas en programación" },
            { text: "message3-title", en_GB: "Affordable prices", es_ES: "Tarifas económicas" },
            { text: "message3-text", en_GB: "My rates are low and my work is high-quality, please feel free to get a quote for your project by going to he contact page. I love my job and my goal is to apply all that I have learned to help others in any way I can.", es_ES: "Mis tarifas son económicas, intento dar el mejor servicio al mejor precio posible puesto que me encanta el trabajo que hago y mi meta es poder ayudar a los demás con ello. No dudes en ponerse en contacto conmigo y pedir presupuesto para tu proyecto." },
            { text: "message4-title", en_GB: "Client centric", es_ES: "Dedicación total" },
            { text: "message4-text", en_GB: "You can count on my total dedication and communication (take into account that my tongue language is Spanish). The project will be delivered on time and will meet your expectations: your satisfaction is very important to me.", es_ES: " Mi dedicación a tu idea o proyecto será total y estaremos comunicados desde el primer día hasta que se finalice. If you don't speak spanish we can communicate in written English (switch please to English version above)." },
            { text: "links", en_GB: "Links", es_ES: "Enlaces" },
            { text: "mis-servicios", en_GB: "My services", es_ES: "Mis servicios" },
            { text: "misc", en_GB: "Miscellaneous", es_ES: "Varios" },
            { text: "must-know", en_GB: "Why should you hire a freelancer?", es_ES: "¿Por qué contratar a un freelancer?" },
            {
                text: "must-know-text",
                en_GB: "You can gain a lot by hiring a freelancer as they need to meet the expectation of their clients and they usually want to do more. In that sense, a freelancer is continuosly learning and you can pick easily work-ready talents for any projects. Also, if you are a company, you don't have to pay any social insurances since the freelancer is a self-employed worker, so you are saving money too. Furthermore, by hiring a freelancer you are helping to entrepreneurs to make their dreams true.",
                es_ES: "El trabajador autónomo o freelancer es la solución ideal para particulares o empresas que tengan un proyecto y busquen a un profesional que pueda adaptarse a los horarios y requerimientos del mismo. Un freelancer está continuamente formándose ya que sus ingresos no son fijos y dependen del número de clientes que tengan; por esa razón el freelancer hará un estudio del trabajo y pondrá todos sus conocimientos a la disposición del cliente para sacarlo adelante. Además, contratando a un freelancer estás ayudando a personas emprendedoras que han decidido dedicarse a lo que les gusta."
            },            
            { text: "nombre", en_GB: "Name", es_ES: "Nombre" },
            { text: "policy-acceptance", en_GB: "I have read and agreed to ", es_ES: "He leído y acepto " },        
            { text: "presupuesto", en_GB: "Request a quote", es_ES: "Solicitar un presupuesto" },    
            {
                text: "programming-text",
                en_GB: "<ul><li>Coding help, bug fixing, performance improvement, code migration, software maintenance, etc.</li></ul><p>If you think your project doesn't fit with any services mentioned above and it involves some skills I know please contact me so that I can see if I might help you. I'll be glad to hearing from you.</p>",
                es_ES: "<ul><li>Ayuda en tareas de programación, eliminación de errores, migración de código, mejora de rendimiento, etc.</li></ul><p>Si tienes un proyecto y piensas que no encaja con los servicios ofrecidos arriba no dudes en ponerte en contacto conmigo para estudiar su viabilidad, te atenderé lo antes posible.</p>"
            },
            { text: "other", en_GB: "Other", es_ES: "Otros" },
   
            { text: "progress", en_GB: "Work in progress", es_ES: "En construcción" },
            { text: "projects", en_GB: "Projects", es_ES: "Proyectos" },
            { text: "projsTitle", en_GB: "Projects | Jose Carlos Román Rubio", es_ES: "Proyectos | Jose Carlos Román Rubio" },
            
            { text: "reset", en_GB: "Reset", es_ES: "Limpiar" },

            { text: "randomService1", en_GB: "I want my website to be re-designed", es_ES: "Quiero cambiar el diseño de mi Web" },
            { text: "randomService2", en_GB: "I want to create a WordPress theme from a HTML template", es_ES: "Quiero convertir una plantilla HTML en un tema WordPress" },
            { text: "randomService3", en_GB: "I want my website to be responsive", es_ES: "Necesito adaptar mi Web a todos los dispositivos" },
            { text: "randomService4", en_GB: "I need to create a corporate website", es_ES: "Necesito una Web para mi negocio" },
            { text: "randomService5", en_GB: "My website is displaying error and warning messages", es_ES: "Mi Web me muestra mensajes de error o advertencias" },
            { text: "randomService6", en_GB: "I would like to have my own Android app", es_ES: "Me gustaría tener mi propia app nativa para Android" },
            { text: "randomService7", en_GB: "I need a programmer", es_ES: "Necesito que me hagan un trabajo de programación" },
            { text: "randomService8", en_GB: "Someone gave me a chunk of code that I don't understand", es_ES: "Me han pasado código y necesito entenderlo" },
            { text: "randomService9", en_GB: "My website is out of date", es_ES: "Mi página Web se ha quedado obsoleta" },
            { text: "randomService10", en_GB: "I need someone to create a desktop app", es_ES: "Necesito crear una aplicación de escritorio" },
            { text: "randomService11", en_GB: "I want a WordPress website", es_ES: "Quiero tener una página Web en WordPress" },
            { text: "randomService12", en_GB: "I want a online store to increase my sales", es_ES: "Quiero vender productos en una tienda online" },
            { text: "randomService13", en_GB: "I have an idea and I need someone to carry it out ", es_ES: "Tengo un proyecto pero no tengo tiempo para hacerlo" },
            { text: "randomService14", en_GB: "I need finish a project but I have no time", es_ES: "Tengo que hacer un proyecto pero no tengo tiempo" },
            { text: "randomService15", en_GB: "I need my desktop application to be multilingual", es_ES: "Quiero convertir mi aplicación en multilenguaje" }, 
            { text: "randomService16", en_GB: "I need my website to be multilingual", es_ES: "Quiero convertir mi página Web en multilenguaje" }, 
            { text: "randomService17", en_GB: "I need to fix some CSS", es_ES: "Tengo problemas con los estilos de mi página Web" },
            { text: "randomService18", en_GB: "I need to develop an hybrid application", es_ES: "Necesito desarrollar una aplicación híbrida" },
            { text: "randomService19", en_GB: "I need a basic app running on iOs and Android", es_ES: "Necesito una aplicación simple para iOS o Android" },
            { text: "randomService20", en_GB: "I want to create my personal website", es_ES: "Necesito crear mi página Web personal" },
            { text: "randomService21", en_GB: "I want SEO my website", es_ES: "Necesito mejorar el SEO de mi Web" },
            { text: "randomService22", en_GB: "I want my website to be faster", es_ES: "Quiero que mi Web vaya más rápida" },
            { text: "randomService23", en_GB: "I want to translate a WordPress theme", es_ES: "Quiero traducir un tema de WordPress" },
            { text: "randomService24", en_GB: "My website doesn't work since I updated WordPress", es_ES: "Mi página Web falla desde que actualicé WordPress" },
            { text: "randomService25", en_GB: "I want an easy-to-use website", es_ES: "Quiero administrar yo mismo el contenido de mi Web" },
            { text: "randomService26", en_GB: "Something is wrong with my website", es_ES: "Algo le pasa a mi página Web" },
            { text: "randomService27", en_GB: "I need a JavaScript developer", es_ES: "Necesito un desarrollador JavaScript" },
            { text: "randomService28", en_GB: "I need a .NET developer", es_ES: "Necesito un desarrollador .NET" },
            { text: "randomService29", en_GB: "I want to develop a WPF application", es_ES: "Quiero desarrollar una aplicación WPF" },
            { text: "randomService30", en_GB: "I want to develop a Web service", es_ES: "Quiero desarrollar un servicio Web" },
            { text: "randomService31", en_GB: "I want someone to add new content on my website", es_ES: "Quiero que me añadan contenido a mi página Web" },

            { text: "sent", en_GB: "Message sent as follows, thank you", es_ES: "Mensaje enviado, gracias" },
            { text: "servicios", en_GB: "Services", es_ES: "Servicios" },
            { text: "servicios-all", en_GB: "All services", es_ES: "Todos mis servicios" },
            { text: "servicios-desktop-mobile", en_GB: "Desktop and mobile development", es_ES: "Aplicaciones de escritorio y de móvil" },
            { text: "servicios-web", en_GB: "Web development", es_ES: "Aplicaciones Web" },
            { text: "servicios-wordpress", en_GB: "WordPress development", es_ES: "WordPress" },
            { text: "servicios-programming", en_GB: "Programming", es_ES: "Programación" },
            { text: "servicios-presupuesto", en_GB: "Request a quote", es_ES: "Solicita presupuesto" },
            
            { text: "servTitle", en_GB: "Desktop, Web & Mobile development | Jose Carlos Román Rubio", es_ES: "Desarrollo de software | Jose Carlos Román Rubio" },
            { text: "sugerencia", en_GB: "Suggestion", es_ES: "Sugerencia" },
            { text: "skills", en_GB: "Skills:", es_ES: "Tecnologías:" },
            { text: "submit", en_GB: "Submit", es_ES: "Enviar" },
            { text: "the-privacy-policy", en_GB: "the privacy policy", es_ES: "la política de privacidad" },
            { text: "web", en_GB: "Web development", es_ES: "Desarrollo Web" },
            {
                 text: "web-text",
                 en_GB: "<ul><li> Front-end, back-end and full-stack Web development using JavaScript / PHP / .NET. </li><li> SOAP-based and REST-based Web services development.</li><li> Bugs fixing </li><li> Website customization. </li> <li> Responsive design. </li><li> E-commerce websites using PrestaShop and WooCommerce. </li></ul>",
                es_ES: "<ul><li> Desarrollo de aplicaciones Web (desde páginas simples hasta todo el full-stack) usando JavaScript, PHP o .NET. </li><li> Creación de APIs (servicios web basados en arquitecturas REST o SOAP) para el acceso de aplicaciones a fuentes de datos. </li><li> Eliminación de errores o advertencias. </li><li> Personalización de páginas Web. </li> <li> Adaptación de páginas Web a dispositivos móviles. </li><li> Creación de tiendas online (PrestaShop, WooCommerce). </li></ul>"
            } , 
            {
                 text: "wordpress-message-text",
                 en_GB: "<p>WordPress is the <strong> most used platform to create websites </strong>. That's why I have decided to add WordPress as a featured service. ¿Why is WordPress so popular? WordPress is an easy-to-install content management system that <strong> ships with the largest theme and plugin ecosystem for your needs </strong> and is SEO-friendly. <br>You can see below my services so that you can have your own up-to-date, secure and easy-to-use WordPress website.</p>",
                 es_ES: "<p>WordPress se ha convertido en la <strong>herramienta más usada hoy en día para crear páginas Web</strong>. Por eso he decidido crear un apartado específico para este gestor de contenidos. ¿Por qué es tan popular WordPress? WordPress es fácil de instalar, tienes un tema o un plugin para practicamente todo lo que necesites y una gran comunidad de desarrolladores detrás; además es buena opción para el SEO. <br><strong>A continuación te ofrezco mis servicios para que tengas tu propia página en WordPress actualizada, segura y fácil de administrar.</strong></p>"
            },  
            {
                 text: "wordpress-text",
                 en_GB: "<ul><li> Corporate easy-to-use website development. </li><li> WordPress installation with all neccesary plugins and page builders so that you can add easily your content.</li><li> WordPress premium themes installation and customization. </li><li> Theme translation. </li> <li> SEO, security and performance improvement. </li><li> HTML template to WordPress theme. </li><li> Theme development. </li><li> Plugin development. </li></ul>",
                es_ES: "<ul><li> Desarrollo de tu página Web personal o corporativa. </li><li> Instalación de WordPress con los plugins necesarios para que puedas añadir tu contenido. </li><li> Instalación y personalización de un tema WordPress. </li><li> Traducción de temas. </li><li> Mejora en el rendimiento, seguridad y SEO de tu Web </li><li> Creación de temas a partir de plantillas HTML. </li><li> Desarrollo de temas desde cero. </li><li> Desarrollo de plugins. </li></ul>"
            },
            { text: "years", en_GB: "years experience", es_ES: "años experiencia" }
        ];
        
        if (localStorage.getItem("language") === "undefined" || localStorage.getItem("language") === null) {
            localStorage.setItem("language", "es_ES");
        }
        this.language = localStorage.getItem("language"); // localStorage.language;
    }
            
    getTextos()
    {
        return this.textos;
    }
    
    getTexto(texto: string)
    {
        for (var i=0; i < this.textos.length;  i++) {

            if (this.textos[i].text == texto) 
            {
                return this.language == 'es_ES' ? this.textos[i].es_ES: this.textos[i].en_GB;
            }
        }
        return "prueba";
    }
    
    getLanguage()
    {
        return this.language;
    }
    
    setLanguage(newLanguage: string){
        this.language = newLanguage;   
    }
   
}
