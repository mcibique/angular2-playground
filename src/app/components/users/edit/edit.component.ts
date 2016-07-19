import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES }  from '@angular/router';

import { UserFormComponent } from './../form/user-form.component';
import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';
import { UserService } from './../shared/user.service';

import './edit.component.scss';

@Component({
  selector: 'edit',
  providers: [ UserService ],
  directives: [ ROUTER_DIRECTIVES, UserFormComponent ],
  pipes: [ UserPipe ],
  template: require('./edit.component.html')
})
export class UserEditComponent implements OnInit, OnDestroy {
  public user: User;
  private loading: boolean;
  private sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.loading = true;
    this.user = User.getEmpty();

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.userService
        .getUser(id)
        .subscribe(
          user => this.user = user,
          null,
          () => this.loading = false
        );
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onSave() {
    this.userService.updateUser(this.user).subscribe(updatedUser => {
      this.user = updatedUser;
    });
  }
}
