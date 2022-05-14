import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../../model/field';
import { Pub } from '../../model/pub';

@Injectable({
  providedIn: 'root'
})
export class ServiceGService {
  public identity:any
    public token:any
    public stats:any
 host="http://localhost:5000/api/offer"
 api="http://localhost:5000/api/candidat"
 app="http://localhost:5000/api/"
  constructor(private http:HttpClient) { }
  public getAllPubs():Observable<Pub[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain, */*',
         'Content-Type':'application/json',
        'Authorization': 'Bearer '+this.gettoken()
      })
    };
   return this.http.get<Pub[]>(this.host + '/getAll',httpOptions);
  }
  public getPubById(id:any):Observable<Pub>{
    return this.http.get<Pub>(this.host+'/'+id);
  }
  public addpub(publication:any):Observable<any>{
    
    return this.http.post(this.host +"/addOffer",publication)
  }
  public deletePub(id:any):Observable<any>{
    
    return this.http.delete(this.host+'/'+ id);
  }
 public updatePub(id:any,b:any):Observable<void>{
    return this.http.put<void>(this.host+'/'+id,b);
  }
 public getFieldByPubId(i:number):Observable<Field>{
    return this.http.get<Field>(this.host+i)
  }
  public searchPub(key:any):Observable<any>{
    return this.http.get(this.host+'/search'+key)
  }
  likeBlog(id:any){
    const blogData={id:id}
    return this.http.put(this.host+'/like',blogData)
  }
  public addComent(id:any,comment:any){
    const blogData={
    id:id,
    comment:comment
    }
    return this.http.post<void>(this.host+'/createcom',blogData)
  }
  login(body:any){
    return this.http.post(this.app+'auth/login',body)
    
  }
  recruiter_register(body:any){
    return this.http.post(this.app+'auth/companyreg',body)
  }
  
  gettoken(){
    return localStorage.getItem('token')||''
  }
  getpostedjobs(){
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.gettoken()||''
      })
    }
    return this.http.get(this.host+'/getAll')
  }
  getUserData(){
    var data=localStorage.getItem('UserData')||''
    if(data==''){
      return false
    }else{
      return JSON.parse(data)
    }
  }
 
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentrecruiter')
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  HaveAccess(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true
    }else{
      alert('you not having access');
      return false
    }
  }
}
  
  


 
  

  

