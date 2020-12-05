export class UserInfo {
  name = '';
  avatarUrl = '';
  drive = {
    used: 0,
    total: 0
  };

  constructor(
    name,
    avatarUrl,
    drive
  ) {
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.drive = drive;
  }
}
