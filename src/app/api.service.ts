import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  getCours(){
    return this.http.get('http://localhost:3000/api/cours')
    .map((res)=>{return res.json()})
  }
  getCourById(id){
    return this.http.get('http://localhost:3000/api/cours/'+id)
    .map((res)=>{
      console.log(res);
      return res.json()
    })
  }
}
