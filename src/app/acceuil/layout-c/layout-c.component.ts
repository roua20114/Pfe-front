import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';

@Component({
  selector: 'app-layout-c',
  templateUrl: './layout-c.component.html',
  styleUrls: ['./layout-c.component.css']
})
export class LayoutCComponent implements OnInit {

  constructor(private service:ServiceService) { }
  field!:Field[]
  f!:Field[]
  pub!:Pub[]
  p!:Pub[]

  ngOnInit(): void {
    this.service.getAllField().subscribe(data=>{
      this.field=data
      this.f=this.field
    })
    this.service.getAllPubs().subscribe(data=>{
      this.pub=data
      this.p=this.pub
    })

  }

}
