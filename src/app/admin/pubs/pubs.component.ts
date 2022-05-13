import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Comments } from 'src/app/model/comments';
import { Field } from 'src/app/model/field';

import { Pub } from '../../model/pub';
import { ServiceGService } from '../../entreprise/service/service-g.service';


@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {
  

  constructor(private service: ServiceGService,private ser:ServiceService ) { }
  pub!: Pub[];
  pubs!:Pub[];
  token:any
  
  
  id:any
  field!:Field[]
  fieldss!:Field[]
  fields!:Field;
  comments!:Comment

  ngOnInit(): void {
    this.service.getAllPubs().subscribe(data=>{
      
      
      this.pub=data
      for (let i = 0; i < this.pub.length; i++) {
        this.ser.getFieldById(this.pub[i]._id).subscribe(e=>{
          if(e!=null)
            this.pub[i].fields=e.name
          
            else
            this.pub[i].fields="Aucune catégorie"
            
        
        })
    }
      

    
    this.pubs=this.pub;})
  
    
  }
  add= new FormGroup({
    comment:new FormControl('')
  })
  
 delete(id:any){
   
  this.service.deletePub(id).subscribe(()=>{window.location.reload()})
 }
 
 filtrer(ss:string){
   return this.pubs.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
 }
 set x(s:string){
  this.pub = this.filtrer(s)
 }

 deleteCom(id:any){
   this.ser.deleteComment(id).subscribe(()=>{window.location.reload()})
 }



 }


