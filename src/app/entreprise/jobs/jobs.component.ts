import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { AuthService } from 'src/app/service/auth.service';
import { ServiceGService } from '../service/service-g.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private service:ServiceGService, private ser:ServiceService,private auth:AuthService) { }
  field!:Field[]
  publication!:Pub[]
  publications!:Pub[]
  ngOnInit(): void {
    this.ser.getAllField().subscribe(data=>{this.field=data;
      console.log(data)});
      
      this.service.getAllPubs().subscribe((data:any)=>{
        if(data && data.length>0){
           this.publication=data
           this.publications=data.length
        }

       
      },(error)=>{
        console.log(error.msg);
        
      })
    
  }
  add=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    fields:new FormControl('',[Validators.required]),
    qualifications:new FormControl('',[Validators.required]),
    placesAvai:new FormControl('',[Validators.required]),
    diplomaReq: new FormControl('',[Validators.required]),
    technologiesReq: new FormControl('',[Validators.required]),
    jobType:new FormControl('',[Validators.required]),
    region:new FormControl('',[Validators.required]),

    logo: new FormControl('',[Validators.required]),
    created_at:new FormControl('',[Validators.required]),
    expirationDate:new FormControl('',[Validators.required]),
    
    
    
    image: new FormControl('',[Validators.required]),

  })
  addPub(){
    const PUB: Pub={
      title: this.add.get('title')?.value,
      description: this.add.get('description')?.value,
      fields: this.add.get('fields')?.value,
      qualifications: this.add.get('qualifications')?.value,
      placesAvai: this.add.get('placesAvai')?.value,
      diplomaReq: this.add.get('diplomaReq')?.value,
      technologiesReq: this.add.get('technologiesReq')?.value,
      jobType: this.add.get('jobType')?.value,
      region: this.add.get('jobType')?.value,

      logo: this.add.get('logo')?.value,
      created_at: this.add.get('created_at')?.value,
      expirationDate:this.add.get('expirationDate')?.value,
      username: this.add.get('username')?.value,
      image: this.add.get('image')?.value
    }
    console.log(PUB)
    this.service.addpub(PUB).subscribe(()=>window.location.reload())
  }
  delete(id:any){
   
   
    this.service.deletePub(id).subscribe(()=>
    window.location.reload()
   )
     
  }
  

}
