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

import { UpdatePubComponent } from './entreprise/update-pub/update-pub.component';

import { LoginComponent } from './admin/login/login.component';

import { AppComponent } from './app.component';
import { LayoutCComponent } from './acceuil/layout-c/layout-c.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ProfilCanComponent } from './candidat/profil-can/profil-can.component';
import { UpdateFieldComponent } from './admin/update-field/update-field.component';
import { ProfilEComponent } from './entreprise/profil-e/profil-e.component';
import { UpdateOfferComponent } from './admin/update-offer/update-offer.component';
import { CandidatTableComponent } from './admin/candidat-table/candidat-table.component';
import { TableUserComponent } from './admin/table-user/table-user.component';
import { ContratAdminComponent } from './admin/contrat-admin/contrat-admin.component';
import { DescriptionComponent } from './entreprise/description/description.component';
import { AuthGuard } from './shared/auth.guard';
import { ProfilComponent } from './admin/profil/profil.component';
import { RoleGuard } from './guards/role.guard';
import { JobsComponent } from './entreprise/jobs/jobs.component';
import { NavbarComponent } from './entreprise/navbar/navbar.component';



const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent,children:[{path:'',component:LayoutCComponent},
  {path:"signE",component:SignEComponent},
  {path:"loginE",component:LoginEComponent},{path:"about",component:AboutUsComponent},
 ]},
  {path:"login", component:LoginComponent},

  {path:'description/:id',component:DescriptionComponent},
  {path:"reset", component:ResetComponent},
  {path:"cv", component:CvComponent},
  {path:"userProfil",component:ProfilCanComponent},
  
   
  {path:"addpub/:id",component:AddPubComponent},
  {path:"pubupdate",component:UpdatePubComponent},
  {path:"field",component:AdminFieldComponent},
  {path:"addField",component:AddFieldComponent},
  
  {path:"navbar",component:NavbarComponent},
  {path:"jobs",component:JobsComponent},
    
  {path:"updateField/:id",component:UpdateFieldComponent},
  {path:"sign",component:SignUpComponent},
  {path:"admin", component:AdminComponent},
  {path:"profilE",component:ProfilEComponent},
  {path:"UpdateOffer/:id",component:UpdateOfferComponent},
  {path:"updatepub/:id",component:UpdatePubComponent},
  
  

  {path:'', component:HomeComponent, children:[{path:'',component:LayoutComponent},
  {path:'field',component:AdminFieldComponent},
  {path:"pubs",component:PubsComponent},
  {path:"candidat",component:CandidatTableComponent},
  {path:"company",component:TableUserComponent},
  {path:"contrat",component:ContratAdminComponent},{path:"profi",component:ProfilComponent},
  

],
  
},

  
  {path:"**", redirectTo:"acceuil", pathMatch:'full'}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
