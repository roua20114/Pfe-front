import { Component, OnInit } from '@angular/core';
import { Injectable, Injector } from '@angular/core';

import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';
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

  constructor(private service:ServiceService,private inject:Injector) { }

  ngOnInit(): void {
    this.service.getAllField().subscribe(data=>{
      this.field=data
      this.f=this.field
    })       
     let authService=this.inject.get(ServiceGService)
    this.user=authService.getUserData()
    
  }

}
