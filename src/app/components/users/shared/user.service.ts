import { Injectable } from '@angular/core';

import { User } from './user.model';

const users: User[] = [
  new User(1, 'first1.last1@domain.com', 'First1', 'Last1'),
  new User(2, 'first2.last2@domain.com', 'First2', 'Last2'),
  new User(3, 'first3.last3@domain.com', 'First3', 'Last3'),
  new User(4, 'somebody.withverylongname@domain.com', 'Somebody', 'Withverylongname')
];

let lastId = users.length;

@Injectable()
export class UserService {
  public getUsers(): Promise<User[]> {
    return new Promise<User[]>(resolve => {
      setTimeout(_ => resolve(users.map(u => u.clone())), 1000);
    });
  }

  public getUsersCount(): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(_ => resolve(users.length), 1000);
    });
  }

  public getUser(id: number): Promise<User> {
    return new Promise<User>(resolve => {
      setTimeout(_ => {
        let user = users.filter(u => u.id === id)[0];
        resolve(user.clone());
      }, 500);
    });
  }

  public updateUser(user: User): Promise<User> {
    return new Promise<User>(resolve => {
      setTimeout(_ => {
        let existingUser = users.filter(u => u.id === user.id)[0];
        existingUser.userName = user.userName;
        existingUser.firstName = user.firstName;
        existingUser.lastName = user.lastName;
        resolve(existingUser.clone());
      }, 300);
    });
  }

  public createUser(user: User): Promise<User> {
    return new Promise<User>(resolve => {
      setTimeout(_ => {
        user.id = ++lastId;
        users.push(user);
        resolve(user.clone());
      } , 500);
    });
  };
}
