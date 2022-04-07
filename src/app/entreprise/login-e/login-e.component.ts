import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {
  form!:FormGroup;

  constructor( private formBuilder: FormBuilder ,private http:HttpClient,private router:Router) {
    
   }
  

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:'',
      password:''
    })
  }
  submit():void{
    console.log(this.form.getRawValue)
    this.http.post('http://localhost:3000/api/auth/login',this.form.getRawValue(),{
      withCredentials:true

    }).subscribe(()=>this.router.navigate(['/profil']))
  }
  

   
  

}
