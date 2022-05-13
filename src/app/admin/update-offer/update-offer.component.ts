import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Field } from 'src/app/model/field';
import { Pub } from 'src/app/model/pub';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
 pub!:Pub
 fields!:Field
 id:any
  constructor(private router: Router, private service: ServiceGService, private ar:ActivatedRoute,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params:Params)=>{
      this.id=params['get']('id')
      this.service.getPubById(this.id).subscribe(data=>{
        this.pub=data
        
      })
    })
  }
  update(){
    this.toaster.success("Fields Updated Successfully")

    return this.service.updatePub(this.id,this.pub).subscribe(()=>this.router.navigate(['/pubs']))
  }
 

}
