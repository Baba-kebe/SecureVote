import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {CandidatService} from "../service/candidat.service";
import {Candidat} from "../interface/candidat";
import {VoteService} from "../service/vote.service";
import {Vote} from "../interface/vote";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss'
})
export class PageAccueilComponent {

  constructor(private authService: AuthService,
              private  router : Router) {}

  candidats : any = [];
  username = this.authService.username;
  role = this.authService.role;
  hasVoted = this.authService.hasVoted;

  logOut() {
    if(confirm("Voulez vous vous deccecter ?")){
      this.authService.logOut();
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/accueil")
  }
}
