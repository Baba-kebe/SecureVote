import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutCandidatComponent} from "./ajout-candidat/ajout-candidat.component";
import {InscriptionElecteurComponent} from "./inscription-electeur/inscription-electeur.component";
import {LoginComponent} from "./login/login.component";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";

const routes: Routes = [
  { path : '', component : InscriptionElecteurComponent},
  { path : 'login', component : LoginComponent, },
  { path : 'accueil', component : PageAccueilComponent, children :[
      { path : 'addCandidat', component : AjoutCandidatComponent },
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
