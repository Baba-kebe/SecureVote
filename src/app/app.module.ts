import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';
import { InscriptionElecteurComponent } from './inscription-electeur/inscription-electeur.component';
import { AjoutCandidatComponent } from './ajout-candidat/ajout-candidat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MypopupComponent } from './mypopup/mypopup.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import {httpInterceptor} from "./interceptor/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionElecteurComponent,
    AjoutCandidatComponent,
    MypopupComponent,
    FooterComponent,
    LoginComponent,
    PageAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([httpInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
