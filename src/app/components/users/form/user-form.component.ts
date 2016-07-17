import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../shared/user.model';

@Component({
  selector: 'user-form',
  template: require('./user-form.component.html')
})
export class UserFormComponent {
  @Input() public user: User;
  @Output() public onSave = new EventEmitter();

  public onSubmit() {
    this.onSave.emit({
      user: this.user
    });
  }
}
