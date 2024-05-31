import { Component } from '@angular/core';
import {Candidat} from "../interface/candidat";
import {CandidatService} from "../service/candidat.service";

@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrl: './ajout-candidat.component.scss'
})
export class AjoutCandidatComponent {

  constructor(private  candidatService : CandidatService) {
  }

  candidat : Candidat = {
    userId : '',
    projet : '',
    image : '',
    labelParti : '',
    nomParti : ''
  }

  addCandidat() {
    this.candidatService.postCandidat(this.candidat);
  }
}
