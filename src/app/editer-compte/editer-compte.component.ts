import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {CandidatService} from "../service/candidat.service";
import {Candidat} from "../interface/candidat";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editer-compte',
  templateUrl: './editer-compte.component.html',
  styleUrl: './editer-compte.component.scss'
})
export class EditerCompteComponent implements OnInit{

  edited! : Candidat;
  geted: any = [];

  constructor(private authService: AuthService,
              private candidatService: CandidatService,
              private  router : Router) {
  }

  numeroNational = this.authService.userId;


  ngOnInit(): void {
    // @ts-ignore
    this.candidatService.getCandidat(this.numeroNational).subscribe({
      next : value => {
        console.log(value);
        this.geted = value;

      }
    })
  }

  updatCandidat() {
    console.log(this.geted)

    this.edited = {
      image: "",
      labelParti: this.geted.labelParti,
      nomParti: this.geted.nomParti,
      projet: this.geted.projet,
      // @ts-ignore
      userId: this.numeroNational
    }

    this.candidatService.editCandidat(this.edited).subscribe({
      next : value => {
        alert("Modification  Enregistré");
        this.router.navigateByUrl("/accueil")

      }, error : err => {
        alert("Echec")
      }
    })
  }
}
