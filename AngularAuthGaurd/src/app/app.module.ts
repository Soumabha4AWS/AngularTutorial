import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../component/home/home.component';
import { AboutUsComponent } from '../component/aboutUs/aboutus.component';
import { ContactUsComponent } from '../component/contactUs/contactus.component';
import { AuthGuard } from '../auth-gaurd/auth.guard';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
