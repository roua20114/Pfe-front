
import { Component, OnInit } from '@angular/core';

import { AuthsService } from '../service/auths.service';




@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  providers:[ AuthsService]
  
})
export class SignComponent implements OnInit {
  
 
 
 

  constructor() { 
   
  }

  ngOnInit(): void {
    
  }
  
 
}



