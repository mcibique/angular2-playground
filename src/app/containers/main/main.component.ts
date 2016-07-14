import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Navigation } from './navigation/navigation.component';
import './main.component.scss';

@Component({
  selector: 'main',
  directives: [ ROUTER_DIRECTIVES, Navigation ],
  template: require('./main.component.html')
})
export class Main {}
