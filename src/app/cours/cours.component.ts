import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private apiService:ApiService,private router:Router) { }

  displayedColumns = ['title', 'author'];
  dataSource;
    
  ngOnInit() {
    this.apiService.getCours().subscribe((res)=>{
      this.dataSource = new MatTableDataSource<any>(res);
    })  }


    goToCour(element){
      console.log(element._id)
      this.router.navigateByUrl('cour/'+element._id);
    }

  }
