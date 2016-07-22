import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

import { ModalService } from '../../modal/modal.service';
import { UserFormComponent } from './../form/user-form.component';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';

import './create.component.scss';

@Component({
  selector: 'create',
  directives: [ UserFormComponent ],
  providers: [ UserService ],
  template: require('./create.component.html')
})
export class CreateUserComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private modalService: ModalService, private router: Router) {}

  public onSave() {
    this.userService.createUser(this.user).subscribe(createdUser => {
      this.modalService.show('Success', `New user '${createdUser.userName}' has been created.`);
      this.router.navigate(['/user/detail', createdUser.id]);
    });
  }

  public ngOnInit() {
    this.user = new User(1, '', '', '');
  }
}
