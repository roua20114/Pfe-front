import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Comments } from 'src/app/model/comments';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';
import * as  $ from "jquery"
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as bootstrap from "bootstrap"
import { Company } from 'src/app/model/company';
@Component({
  selector: 'app-profil-e',
  templateUrl: './profil-e.component.html',
  styleUrls: ['./profil-e.component.css']
})
export class ProfilEComponent implements OnInit {

  constructor(private router: Router,private inject:Injector,private ser: ServiceService,private service: ServiceGService) { 
    this.url="http://localhost:5000/api/user"
  }

  pub!: Pub[];
  edit!:FormGroup
  company!:Company
  pubs!:Pub[];
  field!:Field[]
  username:any
  profileinfo: any;
  profilepic: any;
  picexists: boolean = false;
  public identity:any
    public token:any
    public title!: string;
    public url!: string;
    public status!: string;
    public page:any
    public total:any
    public pages:any
    public itemsPerPage:any
    public publications!: Pub[];
    public showImage:any
    public tempName:string="";
  id:any
  p!:Pub;
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
    created_at:new FormControl('',[Validators.required]),
    expirationDate:new FormControl('',[Validators.required]),
  })
  comments!:Comment
  ngOnInit(): void {
    this.ser.getAllField().subscribe(data=>{
      this.field=data;
    });
    this.service.getAllPubs().subscribe(data=>{
      let authService=this.inject.get(ServiceGService)
      this.profileinfo=authService.getUserData()
      if(!this.profileinfo){
        this.router.navigateByUrl('/acceuil/loginE');

      }
 
      this.pub=data
    this.pubs=this.pub;})
    
   
  }

  set x(s:string){
    this.pub=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.pub.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }
  doSomething(){
    if(this.tempName!==""){
    // this.service.addpub(this.tempName).subscribe(data=>{
    //   if(data){
    //     alert(data.data)
    //   }else{
    //     alert(data.data)

    //   }
    // })
    }
  }
  doTextareaValueChange(ev:any){
    try {
      this.tempName = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }
  
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
      created_at: this.add.get('created_at')?.value,
      expirationDate:this.add.get('expirationDate')?.value,
    }
    console.log(PUB)
    this.service.addpub(PUB).subscribe((data)=>{
      $('.ClosePost').trigger('click')
      if(data.message=="success"){
        Swal.fire(
          'Posted!',
          'Your Job offer has been listed',
          'success'
        )

      }else{
        Swal.fire(
          'Oops',
          'Something went off :( ',
          'error'
        )
      }
    }
    )
  }
  update(){
    

    return this.service.updatePub(this.id,this.edit.value).subscribe(()=>this.router.navigate(['/profilE']))
  }
  

  
  
  
}
