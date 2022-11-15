import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/containers/post.component';
import { UsersComponent } from './components/containers/users.component';
import {DashboardComponent} from './components/layout/dashboard.component';


const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    {path: '', component: UsersComponent},
    {path: 'post', component: PostComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
