import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-gaurd/auth.guard';
import { AboutUsComponent } from '../component/aboutUs/aboutus.component';
import { ContactUsComponent } from '../component/contactUs/contactus.component';
import { HomeComponent } from '../component/home/home.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "aboutus", component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: "contactus", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
