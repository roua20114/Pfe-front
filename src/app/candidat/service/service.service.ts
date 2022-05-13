import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  host="http://localhost:5000/api"

  login(data:any){
    return this.http.post(this.host+'/auth/login',data)
  
  }
  register(data:any){
    return this.http.post(this.host+'/auth/login',data)
  }
  apply(jobs:any){
    const httOptions={
      headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer'+' '+this.gettoken()
    })
  }
  let job_id:any=jobs.jobDetail._id;
    let emp_id:any=this.payload().id
    return this.http.get(this.host+'/can/apply/job_id/emp_id',httOptions)
}
  getappliedjobs(){
    const httOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.gettoken()||''
      })
    }
    return this.http.get(this.host+`/can/find/${this.payload().username}`,httOptions)
  }
  uploadprofilepic(fd:any){
    return this.http.post(this.host+'/candidat/uploadpicture'+identity,fd)
  }
  gettoken(){
    return localStorage.getItem('token')
  }
  payload()
  {
    let token=this.gettoken()
    return JSON.parse(window.atob(token!.split('.')[1]))
  }
  updateprofile(body:any){
    return this.http.put(this.host+'/user/'+identity,body)
  }
  getprofile(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer${this.gettoken()}`
      })
    };
    return this.http.get(this.host+'/user/me',httpOptions)
  }



}

