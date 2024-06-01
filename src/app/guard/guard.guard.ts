import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const guardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  if(auth.isAuthenticated){
    return true;
  }else {
    return false;
  }
};
