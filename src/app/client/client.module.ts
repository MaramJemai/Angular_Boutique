import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import { SignupModule } from './signup/signup.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule,
    SignupModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
