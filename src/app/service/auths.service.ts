import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay } from 'rxjs';
import { User } from '../model/user.model';

import { ServiceGService } from './service-g.service';


@Injectable({
  providedIn: 'root'
})
export class AuthsService {
  selectedUser:User={
    fullName:'',
    email:'',
    password:''
  };
  noAuthHeader={headers: new HttpHeaders({'NoAuth':'True'})}
 

  constructor(private http:HttpClient) { }
  postUser(user: User){
    return this.http.post("http://localhost:3000/api/auth/signUp",user)
  }
  login(user: User) {
    return this.http.post( 'http://localhost:3000/api/auth/login', user);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
     var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  
  
 
   
    
    

  
}

