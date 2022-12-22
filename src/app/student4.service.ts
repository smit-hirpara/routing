import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { book } from './book';
import { Book } from './testdata2';

@Injectable({
  providedIn: 'root' 
})
export class Student4Service {

  sudenurl5="/api/students";
  constructor(private http4:HttpClient) { }
  getbooksformstroe4(id:number):Observable<book> {
    return this.http4.get<book>(this.sudenurl5+"/"+id);
  }

   
  bookUrl = "/api/books";
  getbooksFromStore(id: number): Observable<Book> {
    return this.http4.get<Book>(this.bookUrl + "/" + id);
  }

}
