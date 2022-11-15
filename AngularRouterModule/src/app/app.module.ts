import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutusModule } from './component/modules/aboutus/aboutus.module';
import { ContactusModule } from './component/modules/contactus/contactus.module';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AboutusModule,
    ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
