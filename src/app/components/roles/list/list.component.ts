import { Component, Input } from '@angular/core';

import { Role } from '../shared/role.model';

@Component({
  selector: 'roles-list',
  template: require('./list.component.html')
})
export class RolesListComponent {
  @Input() public roles: Role[];
}
