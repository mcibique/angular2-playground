import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES }  from '@angular/router';

import { AvatarComponent } from './../../avatar/avatar.component';
import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';
import { UserService } from './../shared/user.service';

import './detail.component.scss';

@Component({
  selector: 'detail',
  providers: [ UserService ],
  directives: [ AvatarComponent, ROUTER_DIRECTIVES ],
  pipes: [ UserPipe ],
  template: require('./detail.component.html')
})
export class UserDetailComponent implements OnInit, OnDestroy {
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
}
