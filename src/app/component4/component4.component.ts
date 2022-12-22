import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray} from '@angular/forms';
import { Form10 } from '../form10';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit {

  // form 5
  signupform:FormGroup;
  Firstname5:string="";
  Lastname5:string="";
  Email5:string="";
  Password5:string="";

  
  constructor(private formbuilder:FormBuilder) {
    // form 5
    this.signupform=formbuilder.group({
      fname5:new FormControl(),
      lname5:new FormControl(),
      email5:new FormControl(),
      password5:new FormControl(),
    });

    // form 6
    this.signupform2=formbuilder.group({
      fname6:['',Validators.required],
      lname6:['',Validators.required,Validators.maxLength(10)],
      email6:['',Validators.required,Validators.email],
      password6:['',Validators.required],
    });

    // form 7
    this.signupform3=formbuilder.group({
      fname7:['',Validators.required],
      lname7:['',[Validators.required,Validators.maxLength(10)]],
      email7:['',[Validators.required,Validators.email]],
      password7:['',Validators.required],
    });

    // form 8
    this.signupform4=formbuilder.group({
      fname8:new FormControl(),
      lname8:new FormControl(),
      email8:new FormControl(),
      password8:new FormControl(),
    });

    // form 9
    this.signupform5=formbuilder.group({
      fname9:new FormControl(),
      lname9:new FormControl(),
      email9:new FormControl(),
      password9:new FormControl(),
    });

    // form 10
    this.signupform6=formbuilder.group({
      fname10:new FormControl(),
      lname10:new FormControl(),
      email10:new FormControl(),
      password10:new FormControl(),
    });

    // form 11
    this.signupform7=formbuilder.group({
      fname11:['',Validators.required],
      lname11:['',Validators.required],
      email11:['',Validators.required],
      password11:['',Validators.required],
    });

    // form 12
    this.signupform8=formbuilder.group({
      fname12:['',Validators.required],
      lname12:['',Validators.required],
      email12:['',Validators.required],
      password12:['',Validators.required],
    });
  }

  // form 1
  function1(formvalue1:any) {
    var fname1= formvalue1.value.firstname;
    var lname1= formvalue1.value.lastname;
    var email1= formvalue1.value.email;
    var phno1= formvalue1.value.phno;
    console.warn(formvalue1);
    console.warn(fname1);
    console.warn(lname1);
    console.warn(email1);
    console.warn(phno1);
  }


  // form 2
  function2(formvalue2:any) {
    console.warn(formvalue2);
  }


  // form 3
  function3(formvalue3:any) {
    var fname2 = formvalue3.value.firstname;
    var lname2 = formvalue3.value.lastname;
    var email2 = formvalue3.value.email;
    var phno2 = formvalue3.value.phno;
    console.warn(fname2);
    console.warn(lname2);
    console.warn(email2);
    console.warn(phno2);
    console.warn(formvalue3);
  }


  // form 4
  function4(formvalue4:any) {
    console.warn(formvalue4);
  }


  // form 5
  firstname5:string='';
  lastname5:string='';
  emailaddress5:string='';
  emailpassword5:string='';
  function5(signupform:any) {
    this.firstname5=signupform.controls.fname5.value;
    this.lastname5=signupform.controls.lname5.value;
    this.emailaddress5=signupform.controls.email5.value;
    this.emailpassword5=signupform.controls.password5.value;
    console.warn(signupform.controls);
    console.warn(this.firstname5);
    console.warn(this.lastname5);
    console.warn(this.emailaddress5);
    console.warn(this.emailpassword5);
    console.warn(signupform.value);
  };


  // form 6
  signupform2:FormGroup;
  Firstname6:string="";
  Lastname6:string="";
  Email6:string="";
  Password6:string="";

  firstname6:string='';
  lastname6:string='';
  emailaddress6:string='';
  emailpassword6:string='';
  function6(signupform2:any) {
    this.firstname6=signupform2.controls.fname6.value;
    this.lastname6=signupform2.controls.lname6.value;
    this.emailaddress6=signupform2.controls.email6.value;
    this.emailpassword6=signupform2.controls.password6.value;
    console.warn(signupform2.controls);
    console.warn(this.firstname6);
    console.warn(this.lastname6);
    console.warn(this.emailaddress6);
    console.warn(this.emailpassword6);
  }

  // form 7
  signupform3:FormGroup;
  Firstname7:string="";
  Lastname7:string="";
  Email7:string="";
  Password7:string="";

  firstname7:string='';
  lastname7:string='';
  emailaddress7:string='';
  emailpassword7:string='';
  function7(signupform3:any) {
    this.firstname7=signupform3.controls.fname7.value;
    this.lastname7=signupform3.controls.lname7.value;
    this.emailaddress7=signupform3.controls.email7.value;
    this.emailpassword7=signupform3.controls.password7.value;
    console.warn(signupform3.controls);
    console.warn(this.firstname7);
    console.warn(this.lastname7);
    console.warn(this.emailaddress7);
    console.warn(this.emailpassword7);
  }

  getFunction1() {
    this.firstname7=this.signupform3.get('firstname7')?.value;
    console.log(this.firstname7);
  }
  resetform1() {
    this.signupform3.reset();
  }
  resetform2() {
    this.signupform3.reset({
      'fname7':'utsav',
      'lname7':'hirpara'
    });
  };


  // form 8
  signupform4:FormGroup;
  Firstname8:string="";
  Lastname8:string="";
  Email8:string="";
  Password8:string="";

  firstname8:string='';
  lastname8:string='';
  emailaddress8:string='';
  emailpassword8:string='';
  function8(signupform4:any) {
    this.firstname8=signupform4.controls.fname8.value;
    this.lastname8=signupform4.controls.lname8.value;
    this.emailaddress8=signupform4.controls.email8.value;
    this.emailpassword8=signupform4.controls.password8.value;
    console.warn(signupform4.controls);
    console.warn(this.firstname8);
    console.warn(this.lastname8);
    console.warn(this.emailaddress8);
    console.warn(this.emailpassword8);
    console.warn(signupform4.value);
  };

  fillform3() {
    this.signupform4.setValue({
      "fname8":"meet",
      "lname8":"rathod",
      "email8":"meet123@email.com",
      "password8":"1234567smit123"
    });
  };


  // form 9
  signupform5:FormGroup;
  Firstname9:string="";
  Lastname9:string="";
  Email9:string="";
  Password9:string="";

  firstname9:string='';
  lastname9:string='';
  emailaddress9:string='';
  emailpassword9:string='';
  function9(signupform5:any) {
    this.firstname9=signupform5.controls.fname9.value;
    this.lastname9=signupform5.controls.lname9.value;
    this.emailaddress9=signupform5.controls.email9.value;
    this.emailpassword9=signupform5.controls.password9.value;
    console.warn(signupform5.controls);
    console.warn(this.firstname9);
    console.warn(this.lastname9);
    console.warn(this.emailaddress9);
    console.warn(this.emailpassword9);
    console.warn(signupform5.value);
  };

  patchform() {
    this.signupform5.patchValue({
      "fname9":"smit",
      "email9":"smit123@emaill.com"
    });
  }


  // form 10
  signupform6:FormGroup;
  Firstname10:string="";
  Lastname10:string="";
  Email10:string="";
  Password10:string="";

  firstname10:string='';
  lastname10:string='';
  emailaddress10:string='';
  emailpassword10:string='';
  function10(signupform6:any) {
    this.firstname10=signupform6.controls.fname10.value;
    this.lastname10=signupform6.controls.lname10.value;
    this.emailaddress10=signupform6.controls.email10.value;
    this.emailpassword10=signupform6.controls.password10.value;
    console.warn(signupform6.controls);
    console.warn(this.firstname10);
    console.warn(this.lastname10);
    console.warn(this.emailaddress10);
    console.warn(this.emailpassword10);
    console.warn(signupform6.value);
  };
  ngOnInit(): void {
    // this.signupform6.get('fname10')?.valueChanges.subscribe(
    //   usersnames=>{
    //     console.warn("value changed:- ",usersnames);
    //   }
    // )

    //form10
    this.signupform6.valueChanges.subscribe((usersnames1:Form10): void=>{
        console.warn("firstname value changed:- ",usersnames1.firstnames10);
        console.warn("lastname value changed:- ",usersnames1.lastnames10);
        console.warn("email changed:- ",usersnames1.emails10);
        console.warn("password changed:- ",usersnames1.passwords10);
      }
    );

    // form11
    this.signupform7.get('fname11')?.statusChanges.subscribe(
      statuschang=>{
        console.warn("fname11 validation changed:- ",statuschang);
      }
    );

    // form 12
    this.signupform8.statusChanges.subscribe(
      statuschang=>{
        console.warn("fname11 validation changed:- ",statuschang);
      }
    );


    // form array1
    const farray1=new FormArray([
      new FormControl('shivam'),
      new FormControl('utsav')
    ]);
    console.log("form array");
    console.warn(farray1.value);
    console.warn(farray1.status);
      

    // form array2
    const farray2=new FormArray([
      new FormControl('meet',Validators.minLength(5)),
      new FormControl('virang')
    ]);
    console.log("form array with validation")
    console.warn(farray2.value);
    console.warn(farray2.status);


    // form array3
    const farray3=new FormArray([
      new FormControl(),
      new FormControl()
    ]);
    console.log("black form array");
    console.warn(farray3.value);
    console.warn(farray3.status);


    // form array4
    const farray4=new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl()
    ]);
    farray4.setValue(["smit","meet","utsav"]);
    console.log("form array with setvalue()");
    console.warn(farray4.value);
    console.warn(farray4.status);

    // form array5
    const farray5=new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]);
    farray5.patchValue(["smit","utsav","shivam","raj"]);
    console.log("form array with patchvalue()");
    console.warn(farray5.value);
    console.warn(farray5.status);

    // form array6
    const farray6=new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]);
    farray6.patchValue(["virang","meet","utsav"]);
    console.log("form array with patchvalue()");
    console.warn(farray6.value);
    console.warn(farray6.status);

    // form array6
    const farray7=new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]);
    farray7.reset(["smit","utsav","shivam"]);
    console.log("form array with resetvalue()");
    console.warn(farray7.value);
    console.warn(farray7.status);

    // form array8 error
    const farray8=new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]);
    farray8.setValue(["utsav","shivam","meet",]);
    console.log("form array with setvalue()");
    console.warn(farray8.value);
    console.warn(farray8.status);
  }


  // form 11
  signupform7:FormGroup;
  Firstname11:string="";
  Lastname11:string="";
  Email11:string="";
  Password11:string="";

  firstname11:string='';
  lastname11:string='';
  emailaddress11:string='';
  emailpassword11:string='';
  function11(signupform7:any) {
    this.firstname11=signupform7.controls.fname11.value;
    this.lastname11=signupform7.controls.lname11.value;
    this.emailaddress11=signupform7.controls.email11.value;
    this.emailpassword11=signupform7.controls.password11.value;
    console.warn(signupform7.controls);
    console.warn(this.firstname11);
    console.warn(this.lastname11);
    console.warn(this.emailaddress11);
    console.warn(this.emailpassword11);
    console.warn(signupform7.value);
  };


  // form 12
  signupform8:FormGroup;
  Firstname12:string="";
  Lastname12:string="";
  Email12:string="";
  Password12:string="";

  firstname12:string='';
  lastname12:string='';
  emailaddress12:string='';
  emailpassword12:string='';
  function12(signupform7:any) {
    this.firstname12=signupform7.controls.fname12.value;
    this.lastname12=signupform7.controls.lname12.value;
    this.emailaddress12=signupform7.controls.email12.value;
    this.emailpassword12=signupform7.controls.password12.value;
    console.warn(signupform7.controls);
    console.warn(this.firstname12);
    console.warn(this.lastname12);
    console.warn(this.emailaddress12);
    console.warn(this.emailpassword12);
    console.warn(signupform7.value);
  };
}
