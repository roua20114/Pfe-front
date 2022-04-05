import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../model/field';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  host="http://localhost:3000/api/field"
  host2="http://localhost:3000/api/test"

  constructor( private client: HttpClient) { }
  public getAllField():Observable<Field[]>{
    return this.client.get<Field[]>(this.host+'/findfield');
  }
  public addField(f:any): Observable<void>{
    return this.client.post<void>(this.host+'/create',f);
  }
  public getFieldByPubId(i:number):Observable<Field>{
    return this.client.get<Field>(this.host+i)
  }
  public deleteField(_id:number):Observable<void>{
    return this.client.delete<void>(this.host+_id);
  }
  public updateField(f:any):Observable<void>{
    return this.client.put<void>(this.host,f);
  }
  public getAllUsers():Observable<User[]>{
    return this.client.get<User[]>(this.host2 + '/all')
  }

}
