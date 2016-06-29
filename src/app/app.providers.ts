import { HTTP_PROVIDERS } from '@angular/http';
import { AppState } from './app.service';

export const APP_PROVIDERS = [
  ...HTTP_PROVIDERS,
  AppState
];
