import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';

import './users.component.scss';

@Component({
  selector: 'users',
  providers: [ UserService ],
  directives: [ UserComponent ],
  template: require('./users.component.html')
})
export class UsersComponent implements OnInit {
  public users: User[];
  public loading: boolean;

  constructor(private userService: UserService, private router: Router) { }

  public ngOnInit() {
    this.loading = true;
    this.users = [];

    this.userService
      .getUsers()
      .subscribe(
        users => this.users = users,
        null,
        () => this.loading = false
      );
  }

  public onSelected($event, user) {
    this.router.navigate(['/user/detail', user.id]);
  }
}
