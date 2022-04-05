import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../AdminService/service.service';
import { Field } from '../../model/field';

@Component({
  selector: 'app-admin-field',
  templateUrl: './admin-field.component.html',
  styleUrls: ['./admin-field.component.css']
})
export class AdminFieldComponent implements OnInit {

  constructor( private ser: ServiceService , private router:Router) { }
  fields!:Field[];
  field!:Field[];
  id!:number;


  ngOnInit(): void {
    this.ser.getAllField().subscribe(data=>{
      this.fields=data
      this.field=data
    })
  }

  delete(_id:number){
     this.ser.deleteField(_id).subscribe(()=>window.location.reload())
  }
  set x(s:string){
    this.fields=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.field.filter(x =>x.name.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }

}
