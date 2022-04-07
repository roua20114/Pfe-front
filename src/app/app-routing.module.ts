import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddPubComponent } from './entreprise/add-pub/add-pub.component';
import { AddFieldComponent } from './admin/add-field/add-field.component';

import { AdminFieldComponent } from './admin/admin-field/admin-field.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
;
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

import { CvComponent } from './cv/cv.component';
import { LoginEComponent } from './entreprise/login-e/login-e.component';




import { PubsComponent } from './admin/pubs/pubs.component';
import { ResetComponent } from './reset/reset.component';
import { SignEComponent } from './entreprise/sign-e/sign-e.component';

import { UpdatePubComponent } from './update-pub/update-pub.component';

import { LoginComponent } from './admin/login/login.component';
import { ProfilComponent } from './entreprise/profil/profil.component';
import { AppComponent } from './app.component';
import { LayoutCComponent } from './acceuil/layout-c/layout-c.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ProfilCanComponent } from './candidat/profil-can/profil-can.component';


const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent,children:[{path:'acceuil',component:LayoutCComponent},
 ]},
  {path:"login", component:LoginComponent},
  {path:'about',component:AboutUsComponent},
  
   {path:"reset", component:ResetComponent},
  {path:"cv", component:CvComponent},
  {path:"userProfil",component:ProfilCanComponent},
   
  {path:"addpub",component:AddPubComponent},
  {path:"pubupdate",component:UpdatePubComponent},
  {path:"field",component:AdminFieldComponent},
  {path:"addField",component:AddFieldComponent},
  {path:"signE",component:SignEComponent},
  {path:"loginE",component:LoginEComponent},
 
  {path:"sign",component:SignUpComponent},
  {path:"admin", component:AdminComponent},
  {path:"profilE",component:ProfilComponent},
  

  {path:'', component:HomeComponent, children:[{path:'',component:LayoutComponent},
  {path:'field',component:AdminFieldComponent},
  {path:"pubs",component:PubsComponent},

]},

  
  {path:"**", redirectTo:"acceuil", pathMatch:'full'}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
