import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  

   constructor(public auth:AuthService, public ar: ActivatedRoute) { 
  //   let id= this.ar.snapshot.paramMap.get('id')
  //   this.auth.getUserProfile(id).subscribe((res)=>{
  //     this.currentUser=res.msg
  //   })
  }

  ngOnInit(): void {
  }

}
