import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// app component
import { AppModule } from './app.module';

// router
//import { APP_ROUTER_PROVIDERS } from './app.routes'; 

enableProdMode();

//bootstrap(AppComponent);
//bootstrap(AppComponent, [
//    APP_ROUTER_PROVIDERS,
//])
//.catch(err => console.error(err));

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//.catch(err => console.error(err));