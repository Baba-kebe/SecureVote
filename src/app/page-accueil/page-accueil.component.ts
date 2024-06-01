import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {CandidatService} from "../service/candidat.service";
import {Candidat} from "../interface/candidat";
import {VoteService} from "../service/vote.service";
import {Vote} from "../interface/vote";

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss'
})
export class PageAccueilComponent implements  OnInit{

  constructor(private authService: AuthService,
              private candidatService: CandidatService,
              private vote : VoteService) {}

  candidats : any = [];
  username = this.authService.username;
  role = this.authService.role;
  hasVoted = this.authService.hasVoted;

  ngOnInit(): void {

    this.candidatService.getCandidats().subscribe(
      {
        next : value => {
          this.candidats = value;
          console.log(value)
        }, error : err=>{
          console.log("rr");
          console.log(err);
        }
      }
    )

  }

  saveVote(id : string) {
    var my_vote : Vote = {
      userId : this.authService.userId,
      candidatId : id
    }
    console.log(my_vote)
    this.vote.saveVote(my_vote).subscribe({
      next : value => {
        alert("Vote saved");
      }, error : err => {
        alert("Echec")
        console.log(err)
      }
    })
  }

  logOut() {
    if(confirm("Voulez vous vous deccecter ?")){
      this.authService.logOut();
    }
  }
}
