import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from './book';

@Injectable()
export class StudentService {
  bookUrl ="/api/books";
  constructor(private http:HttpClient) { }
  getbooksFromStore():Observable<book[]> {
    return this.http.get<book[]>(this.bookUrl);
  }
}
