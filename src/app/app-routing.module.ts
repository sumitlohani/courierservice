import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexComponent } from './index/index.component';
import {SignupComponent} from './signup/signup.component';
import {CheckstatusComponent} from './checkstatus/checkstatus.component';

const routes: Routes = [
{path:'aboutus',component : AboutusComponent},
{path:'contactus',component : ContactusComponent},
{path:'',component:IndexComponent},
{path:'signup',component:SignupComponent},
{path:'checkstatus',component:CheckstatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 