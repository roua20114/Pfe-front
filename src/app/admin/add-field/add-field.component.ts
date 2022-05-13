import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Field } from 'src/app/model/field';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
 
  id!:string 

  constructor(private service: ServiceService , private fb:FormBuilder, private router: Router, private ar: ActivatedRoute) { 
   
  }
  addField = new FormGroup({
    field: new FormControl('', [Validators.required])
  })
  get f(){
    return this.addField.controls
  }

  ngOnInit(): void {
  }
  add(){
    const FIELD: Field={
      name:this.addField.get('field')?.value
    }
    console.log(FIELD)
    this.service.addField(FIELD).subscribe(()=>window.location.reload())
  }

}
