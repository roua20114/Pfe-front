import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Field } from '../model/field';
import { Pub } from '../model/pub';
import { ServiceGService } from '../service/service-g.service';

@Component({
  selector: 'app-pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {

  constructor(private service: ServiceGService) { }
  pub!: Pub[];
  pubs!:Pub[];
  id!:number;
  p!:Pub;
  f!:Field;

  ngOnInit(): void {
    this.service.getAllPubs().subscribe(data=>{
      
      this.pub=data
      console.log('pub',this.pub)
      for(let i=0; i<this.pub.length; i++){
        this.service.getFieldByPubId(this.pub[i].id).subscribe(e=>{
          if(e!=null)
          this.pub[i].fields=e.name

        })
      }

    
    this.pubs=this.pub;})
  }
  
 delete(id:number){
   console.log('id',id)
  //  this.service.deletePub(id).subscribe(()=>{window.location.reload()})
 }
 
 filtrer(ss:string){
   return this.pubs.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
 }
 set x(s:string){
  this.pub = this.filtrer(s)
 }

 }
