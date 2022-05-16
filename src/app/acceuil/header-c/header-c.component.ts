import { Component, OnInit } from '@angular/core';
import { Injectable, Injector } from '@angular/core';

import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from '../../entreprise/service/service-g.service';
@Component({
  selector: 'app-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.css']
})
export class HeaderCComponent implements OnInit {
  field!:Field[]
  f!:Field[]
  user:any
  pub!:Pub[]

  constructor(private service:ServiceService,private inject:Injector) { }

  ngOnInit(): void {
    this.service.getAllField().subscribe(data=>{
      this.field=data
      this.f=this.field
    })       
     let authService=this.inject.get(ServiceGService)
    this.user=authService.getUserData()
    
  }
  set x(s:string){
    this.pub=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.pub.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }

}
