import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthsService } from '../service/auths.service';

@Component({
  selector: 'app-sign-e',
  templateUrl: './sign-e.component.html',
  styleUrls: ['./sign-e.component.css']
})
export class SignEComponent implements OnInit {
  
  

  constructor(private service: AuthsService, private router: Router, private ar: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
  }
  
  
 
}

  


