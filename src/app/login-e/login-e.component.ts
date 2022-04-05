import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthsService } from '../service/auths.service';

@Component({
  selector: 'app-login-e',
  templateUrl: './login-e.component.html',
  styleUrls: ['./login-e.component.css']
})
export class LoginEComponent implements OnInit {

  constructor(private service:AuthsService, private router: Router, private ar: ActivatedRoute) {
    
   }
  

  ngOnInit(): void {
  }
  

   
  

}
