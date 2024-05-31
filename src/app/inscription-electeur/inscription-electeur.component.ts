import { Component } from '@angular/core';
import {User} from "../interface/user";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-inscription-electeur',
  templateUrl: './inscription-electeur.component.html',
  styleUrl: './inscription-electeur.component.scss'
})
export class InscriptionElecteurComponent {

  user : User = {
    nom : '',
    prenom : '',
    sexe : '',
    adresse : '',
    numeroNational : '',
    numeroTelephone : '',
    password : '',
    birthDate : ''
  }

  addUser() {
    //alert("backend en cours d'inplementation")
    this.authService.register(this.user)
    this.resetUser()
  }


  resetUser(){
    this.user = {
      nom : '',
      prenom : '',
      sexe : '',
      adresse : '',
      numeroNational : '',
      numeroTelephone : '',
      password : '',
      birthDate : ''
    }
  }
  constructor(private authService : AuthService) {}



}
