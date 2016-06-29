import { Component } from '@angular/core';

import { Header } from './containers/header/header.component';
import { AppState } from './app.service';
import './app.component.scss';

@Component({
  selector: 'user-management',
  directives: [ Header ],
  template: require('./app.component.html')
})
export class AppComponent {
  constructor(public state: AppState) {}
}