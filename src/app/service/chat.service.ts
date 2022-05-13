import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { observable, Observable } from 'rxjs';
import {io, Socket} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket!: Socket
  host="http://localhost:5000"

  constructor() { 
    this.socket=io(this.host)
  }
  joinRoom(data:any):void{
    this.socket.emit('message',data)
  }
  senMessge(data:any):void{
    this.socket.emit('message',data)
  }
  getMessage():Observable<any>{
    return new Observable<{user:string, message:string}>(observer=>{
      this.socket.on('new message',(data)=>{
        observer.next(data);
      })
      return()=>{
        this.socket.disconnect()
      }
    })
  }
}


