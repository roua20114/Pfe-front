import { Component, Injector, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
