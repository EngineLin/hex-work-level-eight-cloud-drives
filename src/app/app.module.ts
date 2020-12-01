import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { PlusButtonComponent } from './plus-button/plus-button.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DriveCapacityProgressBarComponent } from './drive-capacity-progress-bar/drive-capacity-progress-bar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusButtonComponent,
    HeaderComponent,
    SearchBarComponent,
    DriveCapacityProgressBarComponent,
    AvatarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
