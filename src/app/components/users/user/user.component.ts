import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';
import { AvatarComponent } from '../../avatar/avatar.component';
import './user.component.scss';

@Component({
  selector: 'user',
  directives: [ AvatarComponent, ROUTER_DIRECTIVES ],
  pipes: [ UserPipe ],
  template: require('./user.component.html')
})
export class UserComponent {
  @Input() public user: User;
  @Output() public selected = new EventEmitter();

  onSelected() {
    this.selected.emit({
      user: this.user
    });
  }
}
