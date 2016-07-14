import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component } from '@angular/core';
import './navigation.component.scss';

@Component({
  selector: 'navigation',
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./navigation.component.html')
})
export class Navigation {}
