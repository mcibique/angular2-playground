import { HTTP_PROVIDERS } from '@angular/http';
import { AppState } from './app.service';
import { APP_ROUTER_PROVIDERS } from './app.routes';

export const APP_PROVIDERS = [
  ...HTTP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS,
  AppState
];
