import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { PlusButtonComponent } from './components/plus-button/plus-button.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DriveCapacityProgressBarComponent } from './components/drive-capacity-progress-bar/drive-capacity-progress-bar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LogoComponent } from './components/logo/logo.component';
import { TabComponent } from './components/tab/tab.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableToolBoxComponent } from './components/table-tool-box/table-tool-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusButtonComponent,
    HeaderComponent,
    SearchBarComponent,
    DriveCapacityProgressBarComponent,
    AvatarComponent,
    LogoComponent,
    TabComponent,
    ToggleComponent,
    TableComponent,
    TableRowComponent,
    TableToolBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
