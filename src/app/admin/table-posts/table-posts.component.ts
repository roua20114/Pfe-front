import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/service/service-g.service';

@Component({
  selector: 'app-table-posts',
  templateUrl: './table-posts.component.html',
  styleUrls: ['./table-posts.component.css']
})
export class TablePostsComponent implements OnInit {

  constructor(private service: ServiceGService) { }
  posts!:Pub[];
  postd!:Pub[];
  id!:number;
  p!:Pub;
  fields!: Field

  ngOnInit(): void {
    this.service.getAllPubs().subscribe(data=>{
      this.posts=data
      for(let i=0; i<this.posts.length; i++){
        this.service.getFieldByPubId(this.posts[i].id).subscribe(e=>{
          if(e!=null)
          this.posts[i].fields=e.name
          else
          this.posts[i].fields="aucune"
        })
      }
     
    this.postd=this.posts})
  }
  delete(id:number){
    this.service.deletePub(id).subscribe(()=>{window.location.reload})
  }
  set x(s:string){
    this.posts=this.filtrer(s)
  }
  filtrer(ss:string){
    return this.postd.filter(x =>x.title.toUpperCase().indexOf(ss.toUpperCase())!=-1)
  }

}
