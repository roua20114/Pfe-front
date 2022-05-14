import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { AdminComponent } from '../admin.component';
import { ServiceService } from '../AdminService/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm!:FormGroup
  token:any
  a!:boolean
  role:any

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private aserv:ServiceService) {
    
     this.signinForm=this.fb.group({
    email: ["", Validators.compose([Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"),Validators.required])],
    password:["",Validators.required]
  })
   }
  
  

  ngOnInit(): void {
    this.a=true
    
  }

  
  loginUser(){
    this.aserv.login(this.signinForm.value).subscribe((res:any)=>{
      if(res.admin.role=="company"){
        this.auth.login(res.admin.role,res.token)
        localStorage.setItem('CurrentUser',res.admin._id)
        this.router.navigate(['/profilE'])
      }
      if(res.admin.role=="admin"){
  
        this.router.navigate(['/'])
        this.auth.login(res.admin.role,res.token)
        localStorage.setItem('CurrentUser',res.admin._id)
      
      }
      else if(res.admin.role=="candidat"){
        this.router.navigate(['/acceuil'])
        this.auth.login(res.admin.role,res.token)
        localStorage.setItem('CurrentUser',res.candidat._id)
      }
    },err=>{
      console.log("Invalid Password or Email");
      this.a=false
      
    })
    
      
       

      
      

    
    
    
    
  }

    
    
    
      
      
    
  
}

  
  




    
   
  




