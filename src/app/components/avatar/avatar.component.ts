import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.styl']
})
export class AvatarComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  name = '';
  avatarUrl = '';

  get imageStyle(): any {
    return {
      backgroundImage: `url(${this.avatarUrl})`
    };
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.userService.subUserInfo$.subscribe(value => {
      this.name = value.name;
      this.avatarUrl = value.avatarUrl;
    });
  }
}
