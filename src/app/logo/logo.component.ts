import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.styl']
})
export class LogoComponent {
  onClick(): void {
    console.log('logo click');
  }
}
