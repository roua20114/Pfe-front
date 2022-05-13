import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { AuthService } from 'src/app/service/auth.service';
import { ServiceService } from '../../admin/AdminService/service.service';

import { ServiceGService } from '../service/service-g.service';

@Component({
  selector: 'app-add-pub',
  templateUrl:'./add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {
 
 fields!:Field
 id:any
    f!:Field[]
publication!:Pub
    
    
  constructor( private auth:AuthService,private service:ServiceGService,private ser:ServiceService, private router:Router,private ar:ActivatedRoute,private toaster:ToastrService) {
   
    
  }
 

  ngOnInit(): void {
    this.ser.getAllField().subscribe(data=>{this.f=data;
      console.log(data)});
      this.ar.paramMap.subscribe((params:Params)=>{
        this.id=params['get']('id')
        this.service.getPubById(this.id).subscribe(data=>{
          this.publication=data
          
        })
      })
    
    

  }
  update(){
    this.toaster.success("Fields Updated Successfully")

    return this.service.updatePub(this.id,this.publication).subscribe(()=>this.router.navigate(['/jobs']))
  }
 




  

}


