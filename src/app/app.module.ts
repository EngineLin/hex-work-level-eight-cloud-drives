import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

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
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { ArrowButtonComponent } from './components/arrow-button/arrow-button.component';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AsideComponent } from './components/aside/aside.component';
import { FileTypePipe } from './utils/file-type.pipe';
import { FileSizePipe } from './utils/file-size.pipe';

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
    FavoriteButtonComponent,
    ArrowButtonComponent,
    ListComponent,
    GridComponent,
    BreadcrumbComponent,
    AsideComponent,
    FileTypePipe,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
