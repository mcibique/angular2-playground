import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as hmr from 'angular2-hmr';

import { AppComponent } from './app/app.component';
import { APP_PROVIDERS } from './app/app.providers';

hmr.hotModuleReplacement(main, module);

function main() {
  return bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    ...APP_PROVIDERS
  ]);
}
