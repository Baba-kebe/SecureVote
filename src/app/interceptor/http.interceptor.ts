import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService)
  var token = auth.jwtToken;
  if(!req.url.includes("auth")){
    const newReq = req.clone({
      setHeaders : {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(token)
    return  next(newReq);
  }

  return next(req);
};
