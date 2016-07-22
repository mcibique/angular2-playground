import { HTTP_PROVIDERS } from '@angular/http';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppState } from './app.service';
import { APP_PLATFORM_DIRECTIVES } from './directives/directive.providers';

export const APP_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS,
  ...APP_PLATFORM_DIRECTIVES,
  AppState
];
