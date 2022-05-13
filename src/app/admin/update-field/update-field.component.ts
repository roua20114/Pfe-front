import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';

@Component({
  selector: 'app-update-field',
  templateUrl: './update-field.component.html',
  styleUrls: ['./update-field.component.css']
})
export class UpdateFieldComponent implements OnInit {
  field!:Field
  fieldd!:Field
  id!:any
  
  constructor( private service: ServiceService, private ar:ActivatedRoute, private router:Router, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params:Params)=>{
       this.id=params['get']('id')
       this.service.getFieldById(this.id).subscribe(data=>{
         this.field=data
         
       })
     })
  }
  update(){
    this.toaster.success("Fields Updated Successfully")
    
    this.service.updateField(this.id,this.field).subscribe(()=>this.router.navigate(['/field']))
  }
}
