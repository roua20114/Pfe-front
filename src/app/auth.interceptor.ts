import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { ServiceGService } from './entreprise/service/service-g.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private inject:Injector) { }
  
  intercept(req: HttpRequest<any>,
    next: HttpHandler):Observable<HttpEvent<any>>{
     let authService=this.inject.get(ServiceGService)
     let jwtToken=req.clone({
       setHeaders:{
         Authorization:'bearer' +authService.gettoken()
       }
     })
     return next.handle(jwtToken)
    }
}
