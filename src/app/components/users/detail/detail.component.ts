import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute }  from '@angular/router';

import { AvatarComponent } from './../../avatar/avatar.component';
import { UserService } from './../shared/user.service';
import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';
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

  ngOnInit() {
    this.loading = true;
    this.user = User.getEmpty();

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.userService
        .getUser(id)
        .then(user => this.user = user)
        .then(_ => this.loading = false);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
