import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoderService {
  loader = new BehaviorSubject<boolean>(false);
  
  constructor(private http:HttpClient) { }
  getPost():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getComment():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }
}
