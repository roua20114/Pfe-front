import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, Observable, of, shareReplay, throwError} from "rxjs";
import { User } from '../model/user.model';
import * as moment from "moment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin=false
  role:any
  token:any
 
  host="http://localhost:5000/api/auth"
  host2="http://localhost:5000/api/user"
 
  constructor(private http: HttpClient, private router:Router) { }
  signUp(user:any){
    return this.http.post(this.host + '/register',user)
  }

  login(value:any,token:any){
  

    this.isLogin=true
    this.role=value
    localStorage.setItem('STATE','true')
    localStorage.setItem('token',token)
    localStorage.setItem('ROLE',this.role)
    

  }
  
  IsLoggedIn(){
    const token =localStorage.getItem('token')
    if (token)this.isLogin=true
    else this.isLogin=false
    return this.isLogin
    
  }
  logout(){
    this.isLogin=false
    this.role=''
    localStorage.removeItem('token')
    localStorage.removeItem('ROLE')
    localStorage.removeItem('admin')
    localStorage.removeItem('company')
    localStorage.removeItem('STATE')
    localStorage.removeItem('CurentUser')
    this.router.navigate(["/login"])
    return of ({success:this.isLogin, role:""})
  
  }
  getRole(){
    this.role=localStorage.getItem("ROLE")
    return this.role
  }

 

  

  
  
 
  
  
 
  
  
   
}