import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './components/layout/header.component';
import {LayoutComponent} from './components/layout/youtube-layout.component';
import {DashboardComponent} from './components/layout/dashboard.component';
import {HttpService} from './components/services/http.service';
import {ApiService} from './components/services/api.service';
import {UserCardComponent} from './components/user-card.component';
import {UserListComponent} from './components/user-list.component';
import {UsersComponent} from './components/containers/users.component';
import {PostComponent} from './components/containers/post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LayoutComponent,
    UserCardComponent,
    UserListComponent,
    UsersComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
