import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '../services/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);