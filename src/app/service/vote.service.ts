import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vote} from "../interface/vote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  url = "http://localhost:8080/api/vs/vote/savevote";

  constructor(private http: HttpClient) { }

  saveVote(vote : Vote){
    return this.http.post(this.url,vote)
  }
}
