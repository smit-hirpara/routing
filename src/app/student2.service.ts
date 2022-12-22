import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Student2Service {
  sudenurl="/api/students";
  constructor(private http2:HttpClient) { }
  getbooksformstroe2():Observable<any> {
    return this.http2.get<any>(this.sudenurl);
  }
}
