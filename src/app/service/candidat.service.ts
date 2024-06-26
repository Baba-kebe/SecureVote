import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Candidat} from "../interface/candidat";

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  url = "http://localhost:8080/api/vs/candidat";
  constructor(private  http : HttpClient) { }

  postCandidat(candidat : Candidat){

    this.http.post(this.url+"/add", candidat).subscribe({
      next : (data)=>{
        console.log(data);
      }, error : (err) => {
        console.log(err)
      }
    })
  }
  getCandidat(id:string){
    return this.http.get(this.url+"/getCandidat?id="+id)
  }
  getCandidats(){
    return this.http.get(this.url+"/getCandidats");
  }

  editCandidat(edited: Candidat) {
    return this.http.put(this.url+"/edit", edited);
  }
}
