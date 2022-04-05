import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddPubComponent } from './add-pub/add-pub.component';
import { AddFieldComponent } from './admin/add-field/add-field.component';

import { AdminFieldComponent } from './admin/admin-field/admin-field.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { TablePostsComponent } from './admin/table-posts/table-posts.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

import { CvComponent } from './cv/cv.component';
import { LoginEComponent } from './login-e/login-e.component';




import { LoginComponent } from './login/login.component';
import { PubsComponent } from './pubs/pubs.component';
import { ResetComponent } from './reset/reset.component';
import { SignEComponent } from './sign-e/sign-e.component';
import { SignComponent } from './sign/sign.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';
import { UserProfilComponent } from './user-profil/user-profil.component';


const routes: Routes = [
  {path:"acceuil", component:AcceuilComponent},
  {path:"login", component:LoginComponent},
   {path:"signU",component:SignComponent},
   {path:"reset", component:ResetComponent},
  {path:"cv", component:CvComponent},
   {path:"pubs",component:PubsComponent},
  {path:"addpub",component:AddPubComponent},
  {path:"pubupdate",component:UpdatePubComponent},
  {path:"field",component:AdminFieldComponent},
  {path:"addField",component:AddFieldComponent},
  {path:"signE",component:SignEComponent},
  {path:"loginE",component:LoginEComponent},
  {path:"userprofile",component:UserProfilComponent},
  {path:"sign",component:SignUpComponent},
  {path:"admin", component:AdminComponent},
  {path:'', component:HomeComponent, children:[{path:'',component:LayoutComponent},
  {path:'field',component:AdminFieldComponent},
    {path:"allOffersAdmin", component:TablePostsComponent},

]},
  
  {path:"**", redirectTo:"acceuil", pathMatch:'full'}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
