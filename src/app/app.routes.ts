import { provideRouter, RouterConfig }  from '@angular/router';

import { RolesComponent } from './components/roles/roles.component';

import { CreateUserComponent } from './components/users/create/create.component';
import { UserDetailComponent } from './components/users/detail/detail.component';
import { UserEditComponent } from './components/users/edit/edit.component';
import { UsersComponent } from './components/users/users.component';

const routes: RouterConfig = [{
  path: '',
  redirectTo: '/users',
  terminal: true
}, {
  path: 'users',
  component: UsersComponent
}, {
  path: 'user/create',
  component: CreateUserComponent
}, {
  path: 'user/detail/:id',
  component: UserDetailComponent
}, {
  path: 'user/edit/:id',
  component: UserEditComponent
}, {
  path: 'roles',
  component: RolesComponent
}];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
