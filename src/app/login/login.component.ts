import { Component } from '@angular/core';
import {Login} from "../interface/login";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  userlogin : Login = {
    numeroNational : '',
    password : '',
  }


  login() {
    this.authService.authenticate(this.userlogin);

  }
}
