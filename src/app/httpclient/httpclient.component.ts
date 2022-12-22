import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { Student5Service } from '../student5.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {TestData2} from '../testdata2'
import { loadTranslations } from '@angular/localize';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  /* =======================================================
            httpClient get() method with service
  ======================================================= */
  // studentsw7?:book[];
  // constructor(private studentservice:Student5Service) { }
  // getstudentsdata() {
  //   this.studentservice.getstudentdetailsfromdb().subscribe(student => this.studentsw7 = student);
  // }
  // ngOnInit() {
  //   this.getstudentsdata();
  // }


  /* =========================================================
          httpClient get() method without service 1
  ========================================================= */
  // users: user[] = [];

  // url = "https://jsonplaceholder.typicode.com/comments";

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get(this.url).subscribe({
  //     next: (res) => {
  //       this.users.push(res);
  //     }
  //  });
  // }


  // ngOnInit() {
  //   this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe((res:any) => {
  //   // this.users = res;
  //   this.users = res;
  // })
  // }


  /* =========================================================
          httpClient get() method without service 2
  ========================================================= */
  // ngOnInit() {
  // }
  // users?: user[];
  // apiurl = "/api/students";
  
  // constructor(private http: HttpClient) {}
  // getdata() {
  //   this.http.get<user[]>(this.apiurl).subscribe((res: user[]) => {
  //     this.users = res;
  //   })
  // }
  // deletdata() {
  //   this.users = [];
  // }




  /* ====================================================
            HttpClient post() method with service
  ==================================================== */
  // userdata=false;
  // httpclientform!:FormGroup;
  // allhttpclientconterol?:Observable<usersdetails[]>;

  // constructor(private frmbuilder:FormBuilder, private service:Student5Service) {}
  // ngOnInit(): void {
  //   this.httpclientform = this.frmbuilder.group({
  //     id:['',Validators.required],
  //     firstname:['',Validators.required],
  //     lastname:['',Validators.required],
  //     class:['',Validators.required],
  //     age:['',Validators.required]
  //   });
  //   this.getstudentsdata();
  // }
  // httpformsubmit() {
  //   this.userdata = false;
  //   let users = this.httpclientform.value;
  //   this.addusers(users);
  //   this.httpclientform.reset();
  // }
  // addusers(users:user) {
  //   this.service.poststudentdetailsindb(users).subscribe(
  //     userdata => {
  //       this.userdata = true;
  //       this.getstudentsdata();
  //       console.warn(userdata);
  //     }
  //   )
  // }

  // getstudentsdata() {
  //   this.allhttpclientconterol=this.service.getstudentdetailsfromdb();
  //   this.service.getstudentdetailsfromdb();
  // }



  /* ================================================================
                  HttpClient post() and put() method
  ================================================================ */
  // userdata=false;
  // httpclientform!:FormGroup;
  // allhttpclientconterol?:Observable<usersdetails[]>;
  // usersidtoupdate:any;

  // constructor(private frmbuilder:FormBuilder, private service:Student5Service) {}
  // ngOnInit(): void {
  //   this.httpclientform = this.frmbuilder.group({
  //     id:['',Validators.required],
  //     firstname:['',Validators.required],
  //     lastname:['',Validators.required],
  //     class:['',Validators.required],
  //     age:['',Validators.required]
  //   });
  //   this.getstudentsdata();
  // }
  // eadithttppostandputform(studentid:number | undefined) {
  //   this.service.getusersbyid(studentid).subscribe(user => {
  //     this.usersidtoupdate = studentid;
  //     this.httpclientform.controls['id'].setValue(user.id),
  //     this.httpclientform.controls['firstname'].setValue(user.firstname),
  //     this.httpclientform.controls['lastname'].setValue(user.lastname),
  //     this.httpclientform.controls['class'].setValue(user.class),
  //     this.httpclientform.controls['age'].setValue(user.age)
  //   })
  // }
  // httpformsubmit() {
  //   this.userdata = false;
  //   let users = this.httpclientform.value;
  //   this.addusers(users);
  //   this.httpclientform.reset();
  // }
  // addusers(users:user) {
  //   if(this.usersidtoupdate==null) {
  //     this.service.poststudentdetailsindb(users).subscribe(
  //       userdata => {
  //         this.userdata = true;
  //         this.getstudentsdata();
  //         this.usersidtoupdate=null;
  //       }
  //     );
  //   }
  //   else {
  //     users.id = this.usersidtoupdate;
  //     this.service.updatestudentdetailsindb(users).subscribe(users => {
  //       this.userdata=true;
  //       this.getstudentsdata();
  //       this.usersidtoupdate=null;
  //     })
  //   }
  // }

  // getstudentsdata() {
  //   this.allhttpclientconterol=this.service.getstudentdetailsfromdb();
  //   this.service.getstudentdetailsfromdb();
  // }



  /* ================================================================
              HttpClient post() and put(), delete() method
  ================================================================ */
  userdata=false;
  httpclientform!:FormGroup;
  allhttpclientconterol?:Observable<usersdetails[]>;
  usersidtoupdate:any;

  constructor(private frmbuilder:FormBuilder, private service:Student5Service) {}
  ngOnInit(): void {
    this.httpclientform = this.frmbuilder.group({
      id:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      class:['',Validators.required],
      age:['',Validators.required]
    });
    this.getstudentsdata();
  }
  eadithttppostandputform(studentid:number | undefined) {
    this.service.getusersbyid(studentid).subscribe(user => {
      this.usersidtoupdate = studentid;
      this.httpclientform.controls['firstname'].setValue(user.firstname),
      this.httpclientform.controls['lastname'].setValue(user.lastname),
      this.httpclientform.controls['class'].setValue(user.class),
      this.httpclientform.controls['age'].setValue(user.age)
    })
  }
  httpformsubmit() {
    this.userdata = false;
    let users = this.httpclientform.value;
    this.addusers(users);
    this.httpclientform.reset();
  }
  addusers(users:user) {
    if(this.usersidtoupdate==null) {
      this.service.poststudentdetailsindb(users).subscribe(
        userdata => {
          this.userdata = true;
          this.getstudentsdata();
          this.usersidtoupdate=null;
        }
      );
    }
    else {
      users.id = this.usersidtoupdate;
      this.service.updatestudentdetailsindb(users).subscribe(users => {
        this.userdata=true;
        this.getstudentsdata();
        this.usersidtoupdate=null;
      })
    }
  }
  deletehttppostandputform(userid:any) {
    this.service.deletehttppostandputform(userid).subscribe(res => {
      this.getstudentsdata();
    })
  }

  getstudentsdata() {
    this.allhttpclientconterol=this.service.getstudentdetailsfromdb();
    this.service.getstudentdetailsfromdb();
  }
  
}

export class user {
  id?: number;
  firstname?: string;
  lastname?: string;
  class?: string;
  age?: number;
} 

export class usersdetails {
  id?:number;
  firstname?:string;
  lastname?:string;
  class?:string;
  age?:number;
}
export class idclass {
  id?:number;
}