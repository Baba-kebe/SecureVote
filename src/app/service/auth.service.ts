import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Login} from "../interface/login";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {JwtToken} from "../interface/jwt-token";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = "http://localhost:8080/api/vs/auth/register"
  authUrl = "http://localhost:8080/api/vs/auth/login"
  hasVoted!: boolean;
  username? : string;
  userId? : string;
  role? : string;
  jwtToken! : string ;
  isAuthenticated : boolean = false;
  constructor(private  http : HttpClient,
              private router : Router) { }

  public register(user : User){
    console.log(user)
    return this.http.post<JwtToken>(this.registerUrl, user).subscribe({
      next : data => {
        this.jwtToken = data.token;
        var tokenData = jwtDecode(data.token);
        this.getUserData(tokenData);
      },error : err =>  {
        alert("Une erreur s'est produite")
      }
    });
  }

  public authenticate(login : Login){
    return this.http.post<JwtToken>(this.authUrl,login).subscribe({
      next : (data) => {
        this.jwtToken = data.token;
        var tokenData = jwtDecode(data.token);
        this.getUserData(tokenData);
      },error : err =>  {
        alert("Une erreur s'est produite")
      }
    })
  }
  public logOut(){
    this.jwtToken = '';
    this.isAuthenticated = false;
    // @ts-ignore
    this.role = null;
    // @ts-ignore
    this.username = null;
    // @ts-ignore
    this.hasVoted = null;
    // @ts-ignore
    this.userId = null;
    this.router.navigateByUrl("/login")
  }

  private getUserData(tokenData: JwtPayload) {

    console.log(tokenData)
    this.isAuthenticated = true;
    // @ts-ignore
    this.role = tokenData.role;
    // @ts-ignore
    this.username = tokenData.nom.toUpperCase() + " "+tokenData.prenom;
    // @ts-ignore
    this.hasVoted = tokenData.hasVoted;
    // @ts-ignore
    this.userId = tokenData.sub;

    this.router.navigateByUrl("/accueil")
  }
}

