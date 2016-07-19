import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  public getUsers(): Observable<User[]> {
    return Observable.create(observer => {
        observer.next(users.map(user => user.clone()));
        observer.complete();
      })
      .delay(1000);
  }

  public getUsersCount(): Observable<number> {
    return Observable
      .create(observer => {
        observer.next(users.length);
        observer.complete();
      })
      .delay(1000);
  }

  public getUser(id: number): Observable<User> {
    return Observable.from(users).delay(500).filter(u => u.id === id).map(u => u.clone());
  }

  public updateUser(user: User): Observable<User> {
    return Observable
      .from(users)
      .delay(300)
      .filter(u => u.id === user.id)
      .do(existingUser => {
        existingUser.userName = user.userName;
        existingUser.firstName = user.firstName;
        existingUser.lastName = user.lastName;
      })
      .map(existingUser => existingUser.clone());
  }

  public createUser(user: User): Observable<User> {
    return Observable
      .create(observer => {
        user.id = ++lastId;
        users.push(user);
        observer.next(user.clone());
        observer.complete();
      })
      .delay(500);
  };
}
