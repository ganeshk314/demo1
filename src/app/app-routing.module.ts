import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {GaneshComponent} from './ganesh/ganesh.component'

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'ganesh',component:GaneshComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
