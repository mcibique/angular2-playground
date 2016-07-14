import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }  from '@angular/router';

import { UserComponent } from './user/user.component';
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import './users.component.scss';

@Component({
  selector: 'users',
  providers: [ UserService ],
  directives: [ UserComponent, ROUTER_DIRECTIVES ],
  template: require('./users.component.html')
})
export class UsersComponent implements OnInit {
  public users: User[];
  public loading: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.users = [];

    this.userService
      .getUsers()
      .then(users => this.users = users)
      .then(_ => this.loading = false);
  }

  onSelected($event, user) {
    this.router.navigate(['/user/detail', user.id]);
  }
}
