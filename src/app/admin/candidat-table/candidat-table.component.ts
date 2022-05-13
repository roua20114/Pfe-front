import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/admin/AdminService/service.service';
import { Candidat } from 'src/app/model/candidat';

@Component({
  selector: 'app-candidat-table',
  templateUrl: './candidat-table.component.html',
  styleUrls: ['./candidat-table.component.css']
})
export class CandidatTableComponent implements OnInit {
  candidat!:Candidat[]
  candidats!:Candidat[]
 

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getAllCandidats().subscribe(data=>{
      this.candidat=data
      this.candidats=this.candidat
    })

  }

}
