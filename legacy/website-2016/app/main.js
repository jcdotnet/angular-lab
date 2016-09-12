"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
// app component
var app_module_1 = require('./app.module');
// router
//import { APP_ROUTER_PROVIDERS } from './app.routes'; 
core_1.enableProdMode();
//bootstrap(AppComponent);
//bootstrap(AppComponent, [
//    APP_ROUTER_PROVIDERS,
//])
//.catch(err => console.error(err));
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//.catch(err => console.error(err)); 
//# sourceMappingURL=main.js.map