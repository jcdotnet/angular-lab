// vars

var strings = [
    { text: "about", en_GB: "Overview", es_ES: "Resumen" },
    {
        text: "about-text",
        en_GB: "Hello everyone! I was born and raised in Málaga (Spain) and I'm a self-employed programmer. You can contact me either if you need to develop an application (console, desktop, web, mobile...), or have great ideas and need someone to carry them out or just need a programmer for your project",
        es_ES: "¡Hola a tod@s! Mi nombre es Jose Carlos aunque en el mundo profesional soy conocido como JC ya que me llaman así desde la facultad. Soy un apasionado de la informática desde pequeño y actualmente tengo el título de Ingeniero Técnico en Informática, obtenido en la Universidad de Málaga en el año 2014. Dado que mi trabajo se me da muy bien (sobre todo la programación) y que me encantaría aplicar mis conocimientos para ayudar a los demás he decidido empezar a trabajar como profesional autónomo o 'freelancer'. En esta Web además de darme a conocer profesionalmente compartiré algunas de mis aficiones y algunas de las causas a las que me gustaría destinar parte del dinero que perciba; más adelante incorporaré un blog. Espero que os guste :) "
    },
    { text: "contact", en_GB: "Contact", es_ES: "Contacto" },
    { text: "contactme", en_GB: "Contact me: ", es_ES: "Escríbeme: " },
    { text: "desktop", en_GB: "Windows applications development", es_ES: "Desarrollo de aplicaciones para Windows" },
    {
        text: "desktop-text",
        en_GB: "Almost all kinds of console or desktop Windows applications. Ask me what you would like me to develop and I will customize your own program including database, system or web services access, among many others. (<em> over four years experience in .NET, one year in Java </em>)",
        es_ES: "Desarrollo de casi todo tipo de aplicaciones de consola o de escritorio para Windows. Es decir, programas que hagan lo que tú quieras incluyendo: acceso a bases de datos, al sistema, a servicios Web, etc. (<em> cuatro años de experiencia en .NET, uno en Java </em>)"
    },
    
    { text: "hire-me", en_GB: "Things you must know about me", es_ES: "Lo que debes saber antes de contratarme" },
    {
        text: "hire-me-text",
        en_GB: "<ol><li> I received my computer engineering degree in 2014.</li><li> I’m skilled in many languages and technologies and my goal is to apply all that I have learned to help others in any way I can </li><li> I'm more a programmer than a designer.</li><li> I don't work for hours, but for projects</li><li> I will issue you an invoice once the project has been finished.</li><li><em> (only for non-spanish speakers) </em> I'm more comfortable communicating in written English.</li></ol>",
        es_ES: "Una vez explicadas las ventajas de contratar a un trabajador profesional autónomo te comento lo que deberías saber antes de contratarme a mí: <ul><li> Tarifo por proyectos completos o por fases del proyecto (nunca por horas), emitiendo siempre factura una vez finalizado el proyecto o una fase de éste.</li><li> Soy un apasionado de la programación y me adapto a casi todas las tecnologías.</li><li> Estoy comenzando como freelancer por lo que mis tarifas son económicas y garantizo la finalización del proyecto; la satisfacción del cliente es muy importante para mí.</li><li> Mi dedicación a tu idea o proyecto será total desde el primer día hasta que lo finalice.</li><li> En todo momento estaremos comunicados, if you don't speak spanish we can communicate in written English. </li></ul>"
    },
    { text: "inicio", en_GB: "Home", es_ES: "Inicio" },
    { text: "subtitle", en_GB: "Software engineer", es_ES: "Ingeniero técnico informático"},  
    { text: "language", en_GB: "ESPAÑOL", es_ES: "ENGLISH" },
    { text: "links", en_GB: "Links", es_ES: "Enlaces" },
    { text: "misc", en_GB: "Miscellaneous", es_ES: "Varios" },
    { text: "must-know", en_GB: "Why should you hire me?", es_ES: "¿Por qué contratar a un freelancer?" },
    {
        text: "must-know-text",
        en_GB: "<ol><li> I'm passionate about programming since childhood.</li><li> My rates are low since I'm starting as a freelancer. </li><li> You can count on my total dedication to the project. </li></ol>",
        es_ES: "El trabajador autónomo o freelancer es la solución ideal para particulares o empresas que tengan un proyecto y busquen a un profesional que pueda adaptarse a los horarios y requerimientos del mismo. Un freelancer está continuamente formándose ya que sus ingresos no son fijos y dependen del número de clientes que tengan, por esa razón el freelancer hará un estudio del trabajo y pondrá todos sus conocimientos a la disposición del cliente para sacarlo adelante. Además, contratando a un freelancer estás ayudando a personas emprendedoras que han decidido dedicarse a lo que les gusta."
    },
    { text: "programming", en_GB: "Computer programming", es_ES: "Programación" },
    {
        text: "programming-text",
        en_GB: "Coding help, bug fixing, performance improvement, software maintenance, etc",
        es_ES: "Ayuda en tareas de programación, eliminación de errores, mejora de rendimiento, etc"
    },
    { text: "other-services", en_GB: "Other", es_ES: "Otros servicios" },
    {
        text: "other-services-text",
        en_GB: "If you think your project don't fit with any services mentioned above and it involves some skills I know please contact me so that I can see if I might help you",
        es_ES: "Si tienes un proyecto y piensas que no encaja con los servicios ofrecidos arriba no dudes en ponerte en contacto conmigo para estudiar su viabilidad"
    },
    { text: "progress", en_GB: "Work in progress", es_ES: "En construcción" },
    { text: "projects", en_GB: "Projects", es_ES: "Proyectos" },    
    { text: "servicios", en_GB: "Services", es_ES: "Servicios" },
    { text: "skills", en_GB: "I'm also skilled in:", es_ES: "También sé de:" },
    {
        text: "skills-text",
        en_GB: "<ul><li>Android development</li><li>2D game development</li><li>Bootstrap (this website uses bootstrap)</li><li>General computer programming</li><li>Git</li><li>Java, JEE, Servlets, JSP</li><li>node.js, grunt, AngularJS</li><li>Python</li><li>Ruby, Ruby on Rails</li><li>WordPress</li></ul>",
        es_ES: "<ul><li>Bootstrap (esta Web usa bootstrap)</li><li>Desarrollo de aplicaciones Android</li><li>Desarrollo de juegos simples en 2D</li><li>Git</li><li>Java, JEE, Servlets, JSP</li><li>node.js, grunt, AngularJS</li><li>Programación en general</li><li>Python</li><li>Ruby, Ruby on Rails</li><li>WordPress</li></ul>"
    },
    { text: "web", en_GB: "Web development", es_ES: "Desarrollo Web" },
    {
         text: "web-text",
         en_GB: "<ul><li> Client-side web sites (HTML + CSS + Javascript) </li><li> PHP server-side websites </li><li> Web services development </li><li> Multilingual websites development or existing websites conversion to multilingual. The new language(s) texts must be provided unless you are translating from simple English to Spanish. </li></ul>",
         es_ES: "<ul><li> Páginas Web del lado del cliente (HTML + CSS + Javascript) </li><li> Páginas Web PHP </li><li> Desarrollo de servicios Web </li><li> Creación de sitios Web multilingües o conversión de sitios Web ya existentes a multilingüe. Los textos de los nuevos idiomas deben ser proporcionados a no ser que la conversión sea de inglés simple a español </li></ul>"
    }   
]


// functions 

toggle = function (div) {

    var elements = document.getElementsByClassName("contenido");

    for (var i = 0; i < elements.length; i++) {
        elements[i].id == div ? elements[i].style.display = "block" : elements[i].style.display = "none";
    }
}

setLanguage = function (lang) {
    localStorage.setItem("language", lang);
    for (var i = 0; i < strings.length; i++) {
        var elements = document.querySelectorAll("[data-text=" + strings[i].text + "]");
        for (var j = 0; j < elements.length; j++) {
            var e = elements[j];
            if (e.getAttribute("data-text") !== "undefined") {
                if (e.tagName.toLowerCase() === "textarea" || e.tagName.toLowerCase() === "input" && e.getAttribute("type") === "text"
                       || e.tagName.toLowerCase() === "input" && e.getAttribute("type") === "password"
                       || e.tagName.toLowerCase() === "input" && e.getAttribute("type") === "email")
                    e.setAttribute("placeholder", strings[i][lang]);
                else if (e.tagName.toLowerCase() === "img") {
                    e.setAttribute("alt", strings[i][lang]);
                    e.setAttribute("title", strings[i][lang]);
                }
                else if (e.tagName.toLowerCase() === "area")
                    e.setAttribute("alt", strings[i][lang]);
                else if (e.tagName.toLowerCase() === "abbr")
                    e.setAttribute("title", strings[i][lang]);
                else if (e.tagName.toLowerCase() === "input" && e.getAttribute("type") === "radio" || e.tagName.toLowerCase() === "input" && e.getAttribute("type") === "checkbox")
                    continue;
                else if (e.tagName.toLowerCase() === "input")
                    e.value = strings[i][lang];
                else
                    e.innerHTML = strings[i][lang];
            }
        }
    };
};


// events 

$(function () {
    if (localStorage.getItem("language") === "undefined" || localStorage.getItem("language") === null) {
        localStorage.setItem("language", "es_ES");
    }
    setLanguage(localStorage.language);

    /*
    if ($("#change-language").html() == "ESPAÑOL") {
        $("#links-menu").hide();
    }
    */

    $("#change-language").click(function () {
        
        if (this.text == "ENGLISH") {
            this.text == "ESPAÑOL"
            // $("#links-menu").hide();
            setLanguage("en_GB")
          
        }
        else {
            this.text == "ENGLISH"           
            // $("#links-menu").show();
            setLanguage("es_ES")
          
        }
    });
    
    /*
    $('#nav').affix({
        offset: {
            top: $('header').height()
        }
        
    });
    */

});



