import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

import { AvatarComponent } from './../../avatar/avatar.component';
import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';
import { UserService } from './../shared/user.service';

import './detail.component.scss';

@Component({
  selector: 'detail',
  providers: [ UserService, UserPipe ],
  directives: [ AvatarComponent ],
  pipes: [ UserPipe ],
  template: require('./detail.component.html')
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public user: User;
  private loading: boolean;
  private sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private userPipe: UserPipe) { }

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

  public getMainHeading(): string {
    const userString: string = this.userPipe.transform(this.user);
    return userString ? `User detail - ${userString}` : 'User detail';
  }
}
