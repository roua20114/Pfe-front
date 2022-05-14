import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Comments } from 'src/app/model/comments';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';
import * as  $ from "jquery"
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-e',
  templateUrl: './profil-e.component.html',
  styleUrls: ['./profil-e.component.css']
})
export class ProfilEComponent implements OnInit {

  constructor( private router: Router,private inject:Injector,private ser: ServiceService,private service: ServiceGService) { 
    this.url="http://localhost:5000/api/user"
  }
  pub!: Pub[];
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
  
  id:any
  p!:Pub;
  
  comments!:Comment
  ngOnInit(): void {
    this.service.getAllPubs().subscribe(data=>{
      let authService=this.inject.get(ServiceGService)
      this.profileinfo=authService.getUserData()
      if(!this.profileinfo){
        this.router.navigateByUrl('/acceuil/loginE');

      }
      //data of profile can be found in profileinfo
      this.pub=data


    
    this.pubs=this.pub;})
    // this.getprofile()
  }
  set x(s:string){
    this.pub=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.pub.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }
  
  
  

  
  
  
}
