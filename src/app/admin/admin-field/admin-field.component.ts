import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../../AdminService/service.service';
import { Field } from '../../model/field';

@Component({
  selector: 'app-admin-field',
  templateUrl: './admin-field.component.html',
  styleUrls: ['./admin-field.component.css']
})
export class AdminFieldComponent implements OnInit {

  constructor( private ser: ServiceService , private router:Router, private ar: ActivatedRoute) { }
  fields!:Field[];
  field!:Field[];
  fieldd!:Field;
  id!:number;



  ngOnInit(): void {
    this.ar.paramMap.subscribe((params:Params)=>{ 
      this.id=+params['get']('id');
      
        });


    this.ser.getAllField().subscribe(data=>{
      this.fields=data
      this.field=data
    })
  }

  delete(i:number){
     this.ser.deleteField(i).subscribe(()=>window.location.reload())
  }
  update(){
    this.ser.updateField(this.fieldd).subscribe(()=>window.location.reload())
  }
  set x(s:string){
    this.fields=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.field.filter(x =>x.name.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }

}
