import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {CandidatService} from "../service/candidat.service";
import {VoteService} from "../service/vote.service";
import {Vote} from "../interface/vote";

@Component({
  selector: 'app-page-vote',
  templateUrl: './page-vote.component.html',
  styleUrl: './page-vote.component.scss'
})
export class PageVoteComponent implements  OnInit {

  constructor(private authService: AuthService,
              private candidatService: CandidatService,
              private vote : VoteService) {}

  candidats : any = [];
  hasVoted : boolean = this.authService.hasVoted;

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
        alert("Vote enregistré");
      }, error : err => {
        alert("Echec")
        console.log(err)
      }
    })
  }
}
