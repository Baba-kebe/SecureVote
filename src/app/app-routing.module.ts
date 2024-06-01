import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AjoutCandidatComponent} from "./ajout-candidat/ajout-candidat.component";
import {InscriptionElecteurComponent} from "./inscription-electeur/inscription-electeur.component";
import {LoginComponent} from "./login/login.component";
import {PageAccueilComponent} from "./page-accueil/page-accueil.component";
import {guardGuard} from "./guard/guard.guard";
import {EditerCompteComponent} from "./editer-compte/editer-compte.component";

const routes: Routes = [
  { path : '', component : InscriptionElecteurComponent},
  { path : 'login', component : LoginComponent },
  { path : 'accueil', component : PageAccueilComponent, canActivate : [guardGuard] , children :[
      { path : 'addCandidat', component : AjoutCandidatComponent },
      { path : 'edit', component : EditerCompteComponent },
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
