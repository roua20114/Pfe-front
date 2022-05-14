import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {
  token:any
  a!:boolean
  role:any
  loginForm!:FormGroup
  

  constructor( private formBuilder: FormBuilder ,private router:Router,private service:ServiceGService,private auth:AuthService) {
    
   
   this.loginForm=this.formBuilder.group({
    email:["", Validators.compose([Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"),Validators.required])],
    password:['',Validators.required],
   
   })
  }
  

  ngOnInit(): void {
    this.a=true
   
  }
  login(){
    {
      this.service.login(this.loginForm.value).subscribe((res:any)=>{
        if(res.admin.role=="company"){
          
          this.auth.login(res.admin.role,res.token)
          localStorage.setItem('CurrentUser',res.admin._id)
          localStorage.setItem('UserData',JSON.stringify(res.admin))

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
    
     
 
  
  
 
  

   
  

}
