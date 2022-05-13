import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/model/field';

import { ServiceService } from '../AdminService/service.service';


@Component({
  selector: 'app-admin-field',
  templateUrl: './admin-field.component.html',
  styleUrls: ['./admin-field.component.css']
})
export class AdminFieldComponent implements OnInit {

  constructor( private ser: ServiceService , private router:Router, private ar: ActivatedRoute, private toastr:ToastrService) { }
  fields!:Field[];
  field!:Field[];
  fieldd!:Field;
  id:any;
  


  ngOnInit(): void {
   
    this.ser.getAllField().subscribe(data=>{
     this.fields=data
     this.field=data
    })
  }

  delete(id:any){
   
   
    this.ser.deleteField(id).subscribe(()=>
    window.location.reload()
   )
     
  }
  
  set x(s:string){
    this.fields=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.field.filter(x =>x.name.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }

}
