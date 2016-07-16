import { HTTP_PROVIDERS } from '@angular/http';

import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppState } from './app.service';

export const APP_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS,
  AppState
];
