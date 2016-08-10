export class Role {
  constructor(
    public id: number,
    public name: string,
    public description: string = '',
    public numberOfUsers: number = 0,
    public isSystemRole: boolean = false
  ) {}

  public clone(): Role {
    return new Role(this.id, this.name, this.description, this.numberOfUsers, this.isSystemRole);
  }
}
