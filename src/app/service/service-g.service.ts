import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../model/field';
import { Pub } from '../model/pub';

@Injectable({
  providedIn: 'root'
})
export class ServiceGService {
 host="http://localhost:3000/api/offer"
 
  constructor(private http:HttpClient) { }
  public getAllPubs():Observable<Pub[]>{
    return this.http.get<Pub[]>(this.host + '/getAll');
  }
  public getPubById(id:number):Observable<Pub>{
    return this.http.get<Pub>(this.host+id);
  }
  public addpub(b:any):Observable<void>{
    return this.http.post<void>(this.host +"/addOffer"+b.field,b);
  }
  public deletePub(id:number):Observable<void>{
    return this.http.delete<void>(this.host+id);
  }
  public updatePub(b:any):Observable<void>{
    return this.http.put<void>(this.host,b);
  }
  public getFieldByPubId(i:number):Observable<Field>{
    return this.http.get<Field>(this.host+i)
  }

 
  

  
}
