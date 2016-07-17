import { Avatar } from '../../avatar/avatar.model';

export class User implements Avatar {
  constructor(public id: number, public userName: string, public firstName: string = '', public lastName: string = '') {}

  public static getEmpty() {
    return new User(0, '');
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get avatar(): string {
    return '//placehold.it/150x150';
  }

  get avatarThumbnail(): string {
    return '//placehold.it/50x50';
  }

  public clone(): User {
    return new User(this.id, this.userName, this.firstName, this.lastName);
  }
}
