import { PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { AutofocusDirective } from './autofocus/autofocus.directive';

export const APP_PLATFORM_DIRECTIVES = [
  provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true }),
  provide(PLATFORM_DIRECTIVES, { useValue: AutofocusDirective, multi: true })
];
