import { Component } from '@angular/core';

import './header.component.scss';

@Component({
  selector: 'header',
  template: require('./header.component.html')
})
export class Header {
  public title: string = 'User Management';
}
