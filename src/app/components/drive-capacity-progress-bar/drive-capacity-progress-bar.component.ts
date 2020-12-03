import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive-capacity-progress-bar',
  templateUrl: './drive-capacity-progress-bar.component.html',
  styleUrls: ['./drive-capacity-progress-bar.component.styl']
})
export class DriveCapacityProgressBarComponent implements OnInit {
  used = 82;
  total = 100;

  barStyle = {
    right: '100%'
  };

  ngOnInit(): void {
    this.runProgress();
  }

  runProgress(): void {
    const percent = 100 - (this.used / this.total) * 100;
    this.barStyle = {
      right: `${percent}%`
    };
  }
}
