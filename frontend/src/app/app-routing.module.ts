import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
//import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [         
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  //{path:'whatsnew',component:WhatsnewComponent},
 // {path:'specials',component:SpecialsComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'products',component:ProductsComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }