import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {

  private _users: User[] = [
    new User(1, 'first1.last1@domain.com', 'First1', 'Last1'),
    new User(2, 'first2.last2@domain.com', 'First2', 'Last2'),
    new User(3, 'first3.last3@domain.com', 'First3', 'Last3'),
    new User(4, 'somebody.withverylongname@domain.com', 'Somebody', 'Withverylongname')
  ];

  public getUsers(): Promise<User[]> {
    return new Promise<User[]>(resolve => {
      setTimeout(_ => resolve(this._users), 1000);
    });
  }

  public getUsersCount(): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(_ => resolve(this._users.length), 1000);
    });
  }

  public getUser(id: number): Promise<User> {
    return new Promise<User>(resolve => {
      let user = this._users.filter(u => u.id === id)[0];
      setTimeout(_ => resolve(user), 500);
    });
  }
}
