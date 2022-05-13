import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Company } from 'src/app/model/company';
import { Pub } from 'src/app/model/pub';
import { Candidat } from '../../model/candidat';
import { Field } from '../../model/field';

import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  host="http://localhost:5000/api"


  constructor( private client: HttpClient) { }
  public getAllField():Observable<Field[]>{
  return this.client.get<Field[]>(this.host+"/field/findfield");
  }
  public addField(f:any): Observable<void>{
    return this.client.post<void>(this.host+"/field/create",f);
  }
  public getFieldById(id:any):Observable<Field>{
    return this.client.get<Field>(this.host+'/field/'+id)
  }
  public getFieldByPubId(i:number):Observable<Field>{
    return this.client.get<Field>(this.host+i)
  }
  deleteField(id:any):Observable<void>{
    return this.client.delete<void>(this.host+'/field/'+ id);
  }
  public updateField(id:any,f:any):Observable<void>{
    return this.client.put<void>(this.host+ '/field/'+id,f);
  }
  public getAllCompanyUsers():Observable<Company[]>{
    return this.client.get<Company[]>(this.host+'user/all')
  }
  
  public getAllComments():Observable<Comment[]>{
    return this.client.get<Comment[]>(this.host+'comments/comments')
  }
  public deleteComment(id:any):Observable<void>{
    return this.client.delete<void>(this.host+'/comments/'+id)
  }
  public getAllCandidats():Observable<Candidat[]>{
    return this.client.get<Candidat[]>(this.host+'/candidat/getall')
  }
  public getAllPubs():Observable<Pub[]>{
    return this.client.get<Pub[]>(this.host+'/getAll')
  }
  login(data:any){
    return this.client.post(this.host+'/auth/login',data)
  
  }

}
