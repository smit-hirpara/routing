import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { book } from './book';
import { StudentService } from './student.service';
import { Student2Service } from './student2.service';
import { Student3Service } from './student3.service';
import { Student4Service } from './student4.service';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';


  /* ==========================================================================================================
                                                    Condition Based Router 
  ========================================================================================================== */
  // number1=10;
  // number2=20;
  // constructor(private router:Router,){}
  // function1() {
  //   this.router.navigate(['/componetn2']);
  // }
  // function2() {
  //   if(this.number1==10) {
  //     this.router.navigate(['/component4']);
  //   } 
  //   else {
  //     this.router.navigate(['/component5']);
  //   }
  // }


  /* =============================================================================================================
                                  Observable & Suscribe With Web API 
  ===============================================================================================================*/
  // constructor(private studentdeta:StudentService){}
  // ngOnInit() {
  //   this.getsutdentetai();
  // }
  // studentsw!:book[];
  // getsutdentetai() {
  //   this.studentdeta.getbooksFromStore().subscribe(books1=>this.studentsw=books1);
  // }


  /* =============================================================================================================
                                  Observable & Suscribe With Web API 2
  ===============================================================================================================*/
  // constructor(private studentdata2:Student2Service){}
  // ngOnInit() {
  //   this.detstudentdetai2();
  // }
  // studentsw2!:book[];
  // detstudentdetai2() {
  //   this.studentdata2.getbooksformstroe2().subscribe(books2 => {
  //     this.studentsw2 = books2;
  //   });
  // }


  /* ================================================================================================================
                                          Observable & Async pipe With ngfor
  ================================================================================================================= */
  // constructor(studentdata3:Student3Service){}
  // ngOnInit() {
  //   this.detstudentdetai3();
  // }
  // studentsw3!:Observable<any>;
  // detstudentdetai3() {
  //   this.studentsw3=this.studentdata2.getbooksformstroe2();
  // }


  /* ================================================================================================================
                                          Observable & Async pipe With ngif
  ================================================================================================================= */
  // constructor(private studentdata3:Student3Service){}
  // ngOnInit() {
  //   this.detstudentdetai4();
  // }
  // studentsw4!:Observable<any>;
  // detstudentdetai4() {
  //   this.studentsw4=this.studentdata3.getbooksformstroe3(105);
  // }


  /* ================================================================================================================
                                                    Observable pipe map
  ================================================================================================================= */
  // ngOnInit() {
  //   /* =================================================
  //        observable pipe map method with async pipe
  //   ================================================= */
  //   this.detstudentdetai5();
  //   this.getHareshBooks();
  // }

  //  observable pipe method, map method with async pipe
  // studentsw5?: Observable<any>;

  // observable pipe method, map method with subscribe
  // studentsw6?: string;

  // constructor(private studentdata4:Student4Service, private studentdata6:Student4Service) {}
  // detstudentdetai5() {
  //   /* =================================================
  //    observable pipe method, map method with async pipe
  //   ================================================= */
  //   this.studentsw5 = this.studentdata4.getbooksformstroe4(108).pipe(map(books3 => {
  //     console.warn("responce1:- " + books3.firstname);
  //     return "name1:- " + books3.firstname;
  //   }
  //   ));


  //   /* =================================================
  //    observable pipe method, map method with subscribe
  //   ================================================= */     
  //   this.studentdata6.getbooksformstroe4(107).pipe(map(books4 => books4.firstname)).subscribe(name => {
  //     this.studentsw6 = "name2:- "+name;
  //     console.warn("responce2:-"+name);
  //   });
  // }


  
  /* =================================================
    observable pipe method, map method with async pipe
  ================================================= */
  // constructor(private bookservice: Student4Service) {}
  // haxBooks?: Observable<any>;
  // getHareshBooks() {
  //   //****** Use Pipe Map Method ******
  //   this.haxBooks = this.bookservice.getbooksFromStore(105).pipe(
  //     map(book => {console.warn("response3:-" + book.name);
  //      return "Name3:-  " + book.name;
  //     })
  //   );
  // }
}