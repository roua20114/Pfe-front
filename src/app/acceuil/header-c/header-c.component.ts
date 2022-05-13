import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';

@Component({
  selector: 'app-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.css']
})
export class HeaderCComponent implements OnInit {
  field!:Field[]
  f!:Field[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getAllField().subscribe(data=>{
      this.field=data
      this.f=this.field

    })   
  }

}
