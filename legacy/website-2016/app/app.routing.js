"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var projects_component_1 = require('./projects.component');
var services_component_1 = require('./services.component');
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map