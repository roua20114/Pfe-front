import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-e',
  templateUrl: './sign-e.component.html',
  styleUrls: ['./sign-e.component.css']
})
export class SignEComponent implements OnInit {
  
  

  constructor( private router: Router, private fb:FormBuilder, private service: ServiceGService,private auth:AuthService,private activatedroute:ActivatedRoute) { 
    
  }
  RecruiterRegisterForm!:FormGroup;
  signupCandidat!:FormGroup
  role:any
  company:any

  

  ngOnInit(): void {
    this.RecruiterRegisterForm=this.fb.group({
      companyName:['',Validators.required],
      password:['',Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),Validators.minLength(8)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      website:[''],
      description:['',Validators.required],
      creationDate:[''],
      region:['',Validators.required],
      sector:['',Validators.required],
      tel:['',Validators.required],
      type:['',Validators.required],
      logo:[''],



    })
    this.signupCandidat=this.fb.group({
      name:['',Validators.required],
      surname:['',Validators.required],
      description:['',Validators.required],
      address:['',Validators.required],
      zipCode:['',Validators.required],
      diploma:['',Validators.required],
      BirthDate:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required],
      tel:[''],
      gender:[''],
      logo:[''],
      BirthdDate:['']


    })
    
  }
  registerCompany(){
    console.log(this.RecruiterRegisterForm.controls['description']);
    
    // if(this.RecruiterRegisterForm.controls['password']!=this.RecruiterRegisterForm.controls['confirm']){
    //   console.log("Password does not match ")
    // }
    this.service.recruiter_register(this.RecruiterRegisterForm.value).subscribe(res=>{
      $('.ClosePost').trigger('click')
      if(res==null){
        Swal.fire(
          'Oops',
          'Something went off :( ',
          'error'
        )
        
        // alert("Registration failed");
      }else{
        Swal.fire(
          'Registered!',
          'Your account has been created successfully',
          'success'
        )
        console.log("Account created Succefully");

      this.RecruiterRegisterForm.reset()
      }
      
      
      
      
        

    })
 
  }
  registerCandidat(){

  }
  

  
 
}

  


