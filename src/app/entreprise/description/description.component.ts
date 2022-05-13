import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  offer!:Pub

  constructor( private ar:ActivatedRoute,private service:ServiceGService) { }

  ngOnInit(): void {
    let id:number;
    id=this.ar.snapshot.params['id'];
    this.service.getPubById(id).subscribe(data=>{this.offer=data;})
  }

}
