import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResetComponent } from './reset/reset.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CvComponent } from './cv/cv.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddPubComponent } from './entreprise/add-pub/add-pub.component';
import { UpdatePubComponent } from './entreprise/update-pub/update-pub.component';
import{ToastrModule} from 'ngx-toastr';
import {MDBBootstrapModule} from 'angular-bootstrap-md'



import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { PubsComponent } from './admin/pubs/pubs.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFieldComponent } from './admin/admin-field/admin-field.component';

import { LoginEComponent } from './entreprise/login-e/login-e.component';
import { SignEComponent } from './entreprise/sign-e/sign-e.component';

import { TableUserComponent } from './admin/table-user/table-user.component';
import { AddFieldComponent } from './admin/add-field/add-field.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UpdateFieldComponent } from './admin/update-field/update-field.component';
import { ContratAdminComponent } from './admin/contrat-admin/contrat-admin.component';
import { UpdateOfferComponent } from './admin/update-offer/update-offer.component';
import { CandidatureComponent } from './entreprise/candidature/candidature.component';
import { TestComponent } from './entreprise/test/test.component';
import { UpdateTestComponent } from './entreprise/update-test/update-test.component';
import { FooterCComponent } from './acceuil/footer-c/footer-c.component';
import { HeaderCComponent } from './acceuil/header-c/header-c.component';
import { LayoutCComponent } from './acceuil/layout-c/layout-c.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfilCanComponent } from './candidat/profil-can/profil-can.component';

import { LoginComponent } from './admin/login/login.component';
import { AuthService } from './service/auth.service';

import { AuthInterceptor } from './auth.interceptor';
import { ProfilEComponent } from './entreprise/profil-e/profil-e.component';
import { CandidatTableComponent } from './admin/candidat-table/candidat-table.component';
import { DescriptionComponent } from './entreprise/description/description.component';
import { ChatComponent } from './chat/chat.component';
import { JobsComponent } from './entreprise/jobs/jobs.component';
import { NavbarComponent } from './entreprise/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ResetComponent,
    AcceuilComponent,
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
    LoginComponent,
    TableUserComponent,
    AddFieldComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    LayoutComponent,
    UpdateFieldComponent,
    ContratAdminComponent,
    UpdateOfferComponent,
    CandidatureComponent,
    TestComponent,
    UpdateTestComponent,
    FooterCComponent,
    HeaderCComponent,
    LayoutCComponent,
    AboutUsComponent,
    ProfilCanComponent,
    ProfilEComponent,
    CandidatTableComponent,
    DescriptionComponent,
    ChatComponent,
    JobsComponent,
    NavbarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
   
  
    ToastrModule.forRoot()
  
  
  
   
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
