import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Comments } from 'src/app/model/comments';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';
import * as  $ from "jquery"

@Component({
  selector: 'app-profil-e',
  templateUrl: './profil-e.component.html',
  styleUrls: ['./profil-e.component.css']
})
export class ProfilEComponent implements OnInit {

  constructor( private ser: ServiceService,private service: ServiceGService) { 
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
      
      
      this.pub=data
    //   for (let i = 0; i < this.pub.length; i++) {
    //     this.ser.getFieldById(this.pub[i].id).subscribe(e=>{
    //       if(e!=null)
    //         this.pub[i].fields=e.name
    //         else
    //         this.pub[i].fields="Aucune catégorie"
    //     })
    // }
      

    
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
