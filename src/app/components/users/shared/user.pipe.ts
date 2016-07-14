import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({ name: 'user', pure: true })
export class UserPipe implements PipeTransform {
  transform(user: User): string {
    if (!user) {
      return '';
    }

    return user.fullName || user.userName;
  }
}
