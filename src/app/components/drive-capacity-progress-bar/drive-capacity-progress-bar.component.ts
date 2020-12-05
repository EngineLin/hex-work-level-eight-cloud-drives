import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-drive-capacity-progress-bar',
  templateUrl: './drive-capacity-progress-bar.component.html',
  styleUrls: ['./drive-capacity-progress-bar.component.styl']
})
export class DriveCapacityProgressBarComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  used = 0;
  total = 0;

  get barStyle(): any {
    const percent = 100 - (this.used / this.total) * 100;
    return {
      right: `${percent}%`
    };
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.userService.subUserInfo$.subscribe(value => {
      this.used = value.drive.used;
      this.total = value.drive.total;
    });
  }
}
