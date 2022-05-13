import { Component, OnInit } from '@angular/core';
import { ServiceGService } from 'src/app/entreprise/service/service-g.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:any

  constructor(private service:ServiceGService) { }

  ngOnInit(): void {
    
  }

}
