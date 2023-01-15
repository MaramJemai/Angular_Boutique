import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
    {path : '', component : ClientComponent, children :   [
    {path: 'about', component: AboutComponent, },
    {path: 'home', component: HomeComponent,},
    {path: 'signup', component: SignupComponent,},
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
