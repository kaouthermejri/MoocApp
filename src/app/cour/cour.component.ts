import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {

  cour;
  displayedColumns = ['date', 'content'];
  dataSource;
  constructor(private route:ActivatedRoute,private apiService:ApiService) {
    this.route.params.subscribe(res =>{
      console.log(res.id);
      this.apiService.getCourById(res.id+'').subscribe((res)=>{
        this.cour = res;
        console.log(res.comments);
        this.dataSource = new MatTableDataSource<any>(res.comments);;
      });
    }
  );
   }

  ngOnInit() {
  }

}
