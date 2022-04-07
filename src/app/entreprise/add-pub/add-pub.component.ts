import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../AdminService/service.service';
import { Field } from '../../model/field';
import { ServiceGService } from '../../service/service-g.service';

@Component({
  selector: 'app-add-pub',
  templateUrl:'./add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {

  constructor( private service:ServiceGService,private ser:ServiceService, private router:Router) {
    
  }
  fields!:Field[];

  ngOnInit(): void {
    this.ser.getAllField().subscribe(data=>{this.fields=data;
      console.log(data)});

  }
  ajouter(f:NgForm){
    console.log(f.value)
     this.service.addpub(f.value).subscribe(()=>
      this.router.navigate(['/pubs']))
  }
}


