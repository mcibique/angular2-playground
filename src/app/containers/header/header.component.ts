import { Component, ViewEncapsulation } from '@angular/core';
import './header.component.scss';

@Component({
  selector: 'header',
  encapsulation: ViewEncapsulation.None,
  template: require('./header.component.html')
})
export class Header {}