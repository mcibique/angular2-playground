import { Component, OnInit } from '@angular/core';

import { RolesListComponent } from './list/list.component';
import { Role } from './shared/role.model';
import { RoleService } from './shared/role.service';

@Component({
  selector: 'roles',
  providers: [ RoleService ],
  directives: [ RolesListComponent ],
  template: require('./roles.component.html')
})
export class RolesComponent implements OnInit {
  private roles: Role[];
  private loading: boolean;

  constructor(public roleService: RoleService) {}

  public ngOnInit() {
    this.loading = true;
    this.roles = [];

    this.roleService.getRoles().subscribe(
      roles => this.roles = roles,
      null,
      () => this.loading = false
    );
  }
}
