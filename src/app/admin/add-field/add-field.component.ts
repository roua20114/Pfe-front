import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/AdminService/service.service';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  add(f:NgForm){
    console.log(f.value)
    this.service.addField(f.value).subscribe(()=>window.location.reload())
  }

}
