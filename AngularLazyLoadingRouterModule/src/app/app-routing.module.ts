import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'app1', loadChildren: ()=>import('./component/modules/aboutus/aboutus-routing.module').then(module=>module.AboutusRoutingModule)},
  {path: 'app2', loadChildren: ()=>import('./component/modules/contactus/contactus-routing.module').then(module=>module.ContactusRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
