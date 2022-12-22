import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { book } from './book';
import { usersdetails } from './httpclient/httpclient.component';


@Injectable({
  providedIn: 'root'
})
export class Student5Service {

  /* ========================================
          HttpClient get() meyhod
  ========================================= */
  // studenturl="api/users";
  // constructor(private http:HttpClient) { }
  // getstudentdetailsfromdb():Observable<book[]> {
  //   return this.http.get<book[]>(this.studenturl)
  // }


  /* ==========================================
            HttpClient post() method
  ========================================== */
  // studenturl="api/users";
  // constructor(private http:HttpClient) {}
  // poststudentdetailsindb(users:usersdetails):Observable<usersdetails> {
  //   let httpheaders = new HttpHeaders()
  //   .set("Content-type","application.Json")
  //   let options = {
  //     headers:httpheaders
  //   };
  //   return this.http.post<usersdetails>(this.studenturl,users,options);
  // }
  // getstudentdetailsfromdb():Observable<usersdetails[]> {
  //   return this.http.get<usersdetails[]>(this.studenturl);
  // }



  /* ===============================================
        HttpClient post() and put() method
  =============================================== */
  // studenturl="api/users";
  // constructor(private http:HttpClient) {}
  // getusersbyid(usersid:any) {
  //   return this.http.get<usersdetails>(this.studenturl+'/'+usersid);
  // }
  // poststudentdetailsindb(users:usersdetails):Observable<usersdetails> {
  //   let httpheaders = new HttpHeaders()
  //   .set("Content-type","application.Json")
  //   let options = {
  //     headers:httpheaders
  //   };
  //   return this.http.post<usersdetails>(this.studenturl,users,options);
  // }
  // updatestudentdetailsindb(users:usersdetails):Observable<any> {
  //   let httpheaders = new HttpHeaders()
  //   .set("Content-type","application.Json")
  //   let options = {
  //     headers:httpheaders
  //   };
  //   return this.http.put<number>(this.studenturl+'/'+users.id,users,options);
  // }
  // getstudentdetailsfromdb():Observable<usersdetails[]> {
  //   return this.http.get<usersdetails[]>(this.studenturl);
  // }



  /* ===============================================
      HttpClient post() and put(), delete() method
  =============================================== */
  studenturl="http://localhost:3000/users";
  constructor(private http:HttpClient) {}
  getusersbyid(usersid:any) {
    return this.http.get<usersdetails>(this.studenturl+'/'+usersid);
  }
  poststudentdetailsindb(users:usersdetails):Observable<usersdetails> {
    let httpheaders = new HttpHeaders()
    .set("Content-type","application.Json")
    let options = {
      headers:httpheaders
    };
    return this.http.post<usersdetails>(this.studenturl,users,options);
  }
  updatestudentdetailsindb(users:usersdetails):Observable<any> {
    let httpheaders = new HttpHeaders()
    .set("Content-type","application.Json")
    let options = {
      headers:httpheaders
    };
    return this.http.put<number>(this.studenturl+'/'+users.id,users,options);
  }
  deletehttppostandputform(usersid:string):Observable<any> {
    let httpheaders = new HttpHeaders()
    .set("Content-type","application.Json")
    let options = {
      headers:httpheaders
    };
    return this.http.delete<number>(this.studenturl+'/'+usersid);
  }
  getstudentdetailsfromdb():Observable<usersdetails[]> {
    return this.http.get<usersdetails[]>(this.studenturl);
  }
}
