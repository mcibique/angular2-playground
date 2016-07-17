import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }  from '@angular/router';

import { UserFormComponent } from './../form/user-form.component';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';

import './create.component.scss';

@Component({
  selector: 'create',
  directives: [ ROUTER_DIRECTIVES, UserFormComponent ],
  providers: [ UserService ],
  template: require('./create.component.html')
})
export class CreateUserComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit() {
    this.user = new User(1, '', '', '');
  }

  public onSave() {
    this.userService.createUser(this.user).then(createdUser => {
      this.router.navigate(['/user/detail', createdUser.id]);
    });
  }
}
