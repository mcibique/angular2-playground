import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AvatarComponent } from '../../avatar/avatar.component';
import { User } from './../shared/user.model';
import { UserPipe } from './../shared/user.pipe';

import './user.component.scss';

@Component({
  selector: 'user',
  directives: [ AvatarComponent ],
  pipes: [ UserPipe ],
  template: require('./user.component.html')
})
export class UserComponent {
  @Input() public user: User;
  @Output() public selected = new EventEmitter();

  public onSelected() {
    this.selected.emit({
      user: this.user
    });
  }
}
