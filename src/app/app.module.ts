import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ResetComponent } from './reset/reset.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { ProfilCadidatComponent } from './profil-cadidat/profil-cadidat.component';

import { CvComponent } from './cv/cv.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddPubComponent } from './add-pub/add-pub.component';
import { UpdatePubComponent } from './update-pub/update-pub.component';

import{ MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { PubsComponent } from './pubs/pubs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFieldComponent } from './admin/admin-field/admin-field.component';

import { LoginEComponent } from './login-e/login-e.component';
import { SignEComponent } from './sign-e/sign-e.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UserComponent } from './user/user.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AuthGuard } from './auth/auth.guard';
import { TableUserComponent } from './admin/table-user/table-user.component';

import { TablePostsComponent } from './admin/table-posts/table-posts.component';
import { AddFieldComponent } from './admin/add-field/add-field.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    ResetComponent,
    AcceuilComponent,
   
    ProfilCadidatComponent,
 
    CvComponent,
    EntrepriseComponent,
    AddPubComponent,
    UpdatePubComponent,
  
    SignUpComponent,
    ProfilComponent,
    PubsComponent,
    AdminComponent,
    AdminFieldComponent,
   
    LoginEComponent,
    SignEComponent,
    FileUploadComponent,
    UserComponent,
    UserProfilComponent,
    TableUserComponent,
   
    TablePostsComponent,
    AddFieldComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   MatFormFieldModule,
   MatButtonModule,
   MatInputModule,
   MatToolbarModule
   
    ],
  providers: [
 
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
