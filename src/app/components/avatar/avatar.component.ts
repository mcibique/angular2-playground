import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Avatar } from './avatar.model';

import './avatar.component.scss';

@Component({
  selector: 'avatar',
  template: require('./avatar.component.html')
})
export class AvatarComponent {
  @Input() public altText: string;
  @Input('avatar') public images: Avatar;
  @Output() public selected = new EventEmitter();

  public onSelected() {
    this.selected.emit({});
  }
}
