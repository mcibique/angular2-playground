import { Component } from '@angular/core';

import { Header } from './containers/header/header.component';
import { Main } from './containers/main/main.component';
import { Footer } from './containers/footer/footer.component';
import { AppState } from './app.service';
import './app.component.scss';

@Component({
  selector: 'user-management',
  directives: [ Header, Main, Footer ],
  template: require('./app.component.html')
})
export class AppComponent {
  constructor(public state: AppState) {}
}
