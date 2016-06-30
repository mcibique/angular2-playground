import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation.component';
import './main.component.scss';

@Component({
  selector: 'main',
  directives: [ Navigation ],
  template: require('./main.component.html')
})
export class Main {}
