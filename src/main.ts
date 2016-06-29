import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_PROVIDERS } from './app/app.providers';
import * as hmr from 'angular2-hmr';

hmr.hotModuleReplacement(main, module);

function main() {
  return bootstrap(AppComponent, [ ...APP_PROVIDERS ]);
}
