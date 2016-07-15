import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { User } from './../shared/user.model';
import './create.component.scss';

@Component({
  selector: 'create',
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./create.component.html')
})
export class CreateUserComponent implements OnInit {
  public user: User;

  public ngOnInit() {
    this.user = new User(1, '', '', '');
  }
}
