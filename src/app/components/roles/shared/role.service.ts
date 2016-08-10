import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Role } from './role.model';

const roles: Role[] = [
  new Role(1, 'Administrator', 'Description 1', 2, true),
  new Role(2, 'User', 'Description 2', 4),
  new Role(3, 'Guest', 'Description 3', 0),
  new Role(4, 'Limited User', 'Description 4', 1)
];

@Injectable()
export class RoleService {
  public getRoles(): Observable<Role[]> {
    return Observable.create(observer => {
        observer.next(roles.map(role => role.clone()));
        observer.complete();
      })
      .delay(1000);
  }
}
