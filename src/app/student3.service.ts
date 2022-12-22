import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Student3Service {
  sudenurl4="/api/students";
  constructor(private http3:HttpClient) { }
  getbooksformstroe3(id:number):Observable<any> {
    return this.http3.get<any>(this.sudenurl4+"/"+id);
  }
}
