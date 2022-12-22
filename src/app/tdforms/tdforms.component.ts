import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validator, Validators, FormArray } from '@angular/forms';
import { Form11 } from '../form11';

@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.scss']
})
export class TdformsComponent implements OnInit {

  // Reactive Forms
  constructor(private frmbuilder: FormBuilder) {
    /* ======================================================================================================
                                              Reactive Form 1 (Model Driven Form)
    ====================================================================================================== */
    // this.singupForm1 = frmbuilder.group({
    //   fname5: new FormControl(),
    //   lname5: new FormControl(),
    //   phno5: new FormControl(),
    //   email5: new FormControl()
    // });

    

    /* ======================================================================================================
                                              Reactive Form 2 (Model Driven Form)
    ====================================================================================================== */
    // this.signupform2 = frmbuilder.group({
    //   fname6: new FormControl(),
    //   lname6: new FormControl(),
    //   phno6: new FormControl(),
    //   email6: new FormControl(),
    // });



    /* ======================================================================================================
                                    Reactive Form 3 With Validators (Model Driven Form)
    ====================================================================================================== */
    // this.signupform3 = frmbuilder.group({
    //   fname7: ['', Validators.required],
    //   lname7: ['', Validators.required],
    //   email7: ['', Validators.required],
    //   password7: ['', Validators.required],
    // });



    /* ======================================================================================================
                            Getvalue() And Reset() With Reactive Form 4 (Model Driven Form)
    ====================================================================================================== */
    // this.signupform4 = frmbuilder.group({
    //   fname8: ['', Validators.required],
    //   lname8: ['', Validators.required],
    //   email8: ['', Validators.required],
    //   password8: ['', Validators.required],
    // });



    /* ======================================================================================================
                      Setvalue() and Patchvalue() With Reactive Form 5 (Model Driven Form)
    ====================================================================================================== */
    // this.signupform5 = frmbuilder.group({
    //   fname9: ['', Validators.required],
    //   lname9: ['', Validators.required],
    //   email9: ['', Validators.required],
    //   password9: ['', Validators.required],
    // });



    /* ======================================================================================================
                      ValueChanges() And StatusChanges() with Reactive Form 6 (Model Driven Form)
    ====================================================================================================== */
    // this.signupform6 = frmbuilder.group({
    //   fname10: ['', Validators.required],
    //   lname10: ['', Validators.required],
    //   email10: ['', Validators.required],
    //   password10: ['', Validators.required]
    // })
  }




  /* ======================================================================================================
                                              Reactive Form 1 (Model Driven Form)
  ====================================================================================================== */
  // singupForm1: FormGroup;
  // firstname5: string = '';
  // lastname5: string = '';
  // email5: string = '';
  // password5: string = '';

  // postdata1(singupForm1: any) {
  //   this.firstname5 = singupForm1.controls.fname5.value;
  //   this.lastname5 = singupForm1.controls.lname5.value;
  //   this.email5 = singupForm1.controls.phno5.value;
  //   this.password5 = singupForm1.controls.email5.value;
  //   console.warn(singupForm1.controls);
  //   console.warn(this.firstname5);
  //   console.warn(this.lastname5);
  //   console.warn(this.email5);
  //   console.warn(this.password5);
  // }



  /* ======================================================================================================
                                              Reactive Form 2 (Model Driven Form)
  ====================================================================================================== */
  // signupform2: FormGroup;
  // firstname6: string = '';
  // lastname6: string = '';
  // emails6: string = '';
  // phnos6: string = '';

  // postdata2(signupform2: any) {
  //   this.firstname6 = signupform2.controls.fname6.value;
  //   this.lastname6 = signupform2.controls.lname6.value;
  //   this.emails6 = signupform2.controls.email6.value;
  //   this.phnos6 = signupform2.controls.phno6.value;
  //   console.warn(signupform2.controls);
  //   console.warn(this.firstname6);
  //   console.warn(this.lastname6);
  //   console.warn(this.emails6);
  //   console.warn(this.phnos6);
  // }




  /* ======================================================================================================
                                    Reactive Form 3 With Validators (Model Driven Form)
    ====================================================================================================== */
  // signupform3: FormGroup;
  // firstname7: string = '';
  // lastname7: string = '';
  // emails7: string = '';
  // phnos7: string = '';

  // postdata3(signupform3: any) {
  //   this.firstname7 = signupform3.controls.fname7.value;
  //   this.lastname7 = signupform3.controls.lname7.value;
  //   this.emails7 = signupform3.controls.email7.value
  //   this.phnos7 = signupform3.controls.password7.value;
  //   console.warn(signupform3.controls);
  //   console.warn(this.firstname7);
  //   console.warn(this.lastname7);
  //   console.warn(this.emails7);
  //   console.warn(this.phnos7);
  // }

  


  /* ======================================================================================================
                            Getvalue() And Reset() With Reactive Form 4 (Model Driven Form)
  ====================================================================================================== */
  // signupform4: FormGroup;
  // firstname8: string = '';
  // lastname8: string = '';
  // emails8: string = '';
  // passwords8: string = '';
  // postdata4(signupform4: any) {
  //   this.firstname8 = this.signupform4.get('fname8')?.value;
  //   this.lastname8 = this.signupform4.get('lname8')?.value;
  //   console.warn(this.firstname8);
  //   console.warn(this.lastname8);
  // }
  // postdata5() {
  //   console.warn(this.signupform4.value);
  // }
  // resetfunction1() {
  //   this.signupform4.reset();
  // }
  // resetfunction2() {
  //   this.signupform4.reset({
  //     fname8: 'meet',
  //     lname8: 'rathod'
  //   })
  // }




  /* ======================================================================================================
                      Setvalue() and Patchvalue() With Reactive Form 5 (Model Driven Form)
  ====================================================================================================== */
  // signupform5: FormGroup;
  // firstname9: string = '';
  // lastname9: string = '';
  // emails9: string = '';
  // passwords9: string = '';
  // postdata6(signupform5: any) {
  //   this.firstname9 = this.signupform5.get('fname9')?.value;
  //   this.lastname9 = this.signupform5.get('lname9')?.value;
  //   this.emails9 = this.signupform5.get('email9')?.value;
  //   this.passwords9 = this.signupform5.get('password9')?.value;
  //   console.warn(this.firstname9);
  //   console.warn(this.lastname9);
  //   console.warn(this.emails9);
  //   console.warn(this.passwords9);
  // }
  // setvaluefunction1() {
  //   this.signupform5.setValue({
  //     fname9: 'utsav',
  //     lname9: 'hirpara',
  //     email9: 'utsav123@test.com',
  //     password9: 'utsav4820t',
  //   })
  // }
  // patchvaluefunction2() {
  //   this.signupform5.patchValue({
  //     fname9: 'virang',
  //     email9: 'virang123@tst.com',
  //   })
  // }



  /* ======================================================================================================
                      ValueChanges() And StatusChanges() with Reactive Form 6 (Model Driven Form)
    ====================================================================================================== */
  // signupform6: FormGroup;
  // firstname10: string = '';
  // lastname10: string = '';
  // emails10: string = '';
  // passwords10: string = '';
  // postdata7(signupform6: any) {
  //   this.firstname10 = this.signupform6.get('fname10')?.value;
  //   this.lastname10 = this.signupform6.get('lname10')?.value;
  //   this.emails10 = this.signupform6.get('email10')?.value;
  //   this.passwords10 = this.signupform6.get('password10')?.value;
  //   console.warn(this.firstname10);
  //   console.warn(this.lastname10);
  //   console.warn(this.emails10);
  //   console.warn(this.passwords10);
  // }



  /* ======================================================================================================
                                  Nasted Form Array With Reactive Form 1 (Model Driven Form)
    ====================================================================================================== */
  // nform1: any;


  
  
 ngOnInit(): void {



    /* ======================================================================================================
                      ValueChanges() And StatusChanges() with Reactive Form 6 (Model Driven Form)
    ====================================================================================================== */
    // valuechanges()
    // this.signupform6.get('fname10')?.valueChanges.subscribe(
    //   uname => {
    //     console.warn('fname vlaue: ' + uname);
    //   }
    // ),
    // this.signupform6.valueChanges.subscribe((fullform1: Form11) => {
    //   console.warn('first name: ' + fullform1.fname10);
    //   console.warn('last name: ' + fullform1.lname10);
    //   console.warn('email: ' + fullform1.email10);
    //   console.warn('password: ' + fullform1.password10);
    // }
    // )
    // status chages()
    // this.signupform6.get('fname10')?.statusChanges.subscribe(
    //   uname2 => {
    //     console.log('fname validation: ' + uname2);
    //   }
    // )
    // this.signupform6.statusChanges.subscribe(
    //   fullform2 => {
    //     console.log('full form: ' + fullform2);
    // });



    /* ======================================================================================================
                                  form array with Reactive Form 6 (Model Driven Form)
    ====================================================================================================== */
    // 
    // const array1 = new FormArray([
    //   new FormControl("smit", Validators.minLength(4)),
    //   new FormControl("utsav")
    // ]);
    // console.warn(array1.value);
    // console.warn(array1.status);


    // nasted form array
    // this.nform1 = new FormGroup({
    //   contactno1: new FormArray([
    //     new FormControl('1234567890'),
    //     new FormControl('9087654321'),
    //   ]),
    // });



    /* ======================================================================================================
                            add rows dynamically With Reactive Form (Model Driven Form)
    ====================================================================================================== */
     this.Formgroup1 = this.frmbuilder.group({
     itemsRows: this.frmbuilder.array([this.initItemRow()]),
     });
    }

  /* ======================================================================================================
                            add rows dynamically With Reactive Form (Model Driven Form)
  ====================================================================================================== */
  Formgroup1!: FormGroup;
  totalRows!: number;

  // add row dynamically
  initItemRow() {
    return this.frmbuilder.group({
      fName:['',[Validators.required]],
      lNmae:['',[Validators.required]],
      Email:['',[Validators.required]],
      Password:['',[Validators.required]]
    })
  }
  getControls() {
    return (this.Formgroup1?.get('itemsRows') as FormArray).controls;
  }
  addnewRow1() {
    const control = <FormArray>this.Formgroup1.controls['itemsRows'] as FormArray;
    control.push(this.initItemRow());
  }
  deleteRow(index:number) {
    const control = <FormArray>this.Formgroup1.controls['itemsRows'] as FormArray;
    this.totalRows = control.value.length;
    if(control != null) {
      this.totalRows=control.value.length;
    }
    if(this.totalRows > 1) {
      control.removeAt(index);
    }
    else {
      alert('one record is mandatory');
    }
  }





  /*=====================================================================================
                      Reactive form Add new Dynamic Multiple row FormControl
  =====================================================================================*/
// HareshFormGroup: FormGroup;
// TotalRow: number;

// constructor(private _fb: FormBuilder) { }

// ngOnInit() {
//   this.HareshFormGroup = this._fb.group({
//     itemRows: this._fb.array([this.initItemRow()]),
//   });
// }

// initItemRow() {
//   return this._fb.group({
//     Name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("^[a-z0-9_-]{8,15}$")]],
//     RollNo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^((\\+91-?)|0)?[0-9]{5}$")]],
//     Class: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{8,15}$")]],
//     MobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
//   })
// }

// getControls() {
//   return (this.HareshFormGroup.get('itemRows') as FormArray).controls;
// }

// addNewRow() {
//   const control = <FormArray>this.HareshFormGroup.controls['itemRows'] as FormArray;
//   control.push(this.initItemRow());
// }

// deleteRow(index: number) {
//   const control = <FormArray>this.HareshFormGroup.controls['itemRows'] as FormArray;
//   this.TotalRow = control.value.length;
//   if (control != null) {
//     this.TotalRow = control.value.length;
//   }
//   if (this.TotalRow > 1) {
//     control.removeAt(index);
//   }
//   else {
//     alert('one record is mendedary...');
//   }
// }




  // Template Driven Forms
  /*=====================================================================================
                                      Template Driven Form 1
  =====================================================================================*/
  // function1(formvalue1: any) {
  //   console.warn(formvalue1);
  // }



  /*=====================================================================================
                                      Template Driven Form 2
  =====================================================================================*/
  // function2(formvalue2: any) {
  //   var firstname1 = formvalue2.controls.fname2.value;
  //   var lastname1 = formvalue2.controls.lname2.value;
  //   var phonenumber1 = formvalue2.controls.phno2.value;
  //   var emailaddress1 = formvalue2.controls.email2.value;
  //   console.warn(firstname1);
  //   console.warn(lastname1);
  //   console.warn(phonenumber1);
  //   console.warn(emailaddress1);
  //   console.warn(formvalue2);
  // }



  /*=====================================================================================
                          Template Drive Form With Validators 1
  =====================================================================================*/
  // function3(formvalue3: any) {
  //   var firstname2 = formvalue3.controls.fname3.value;
  //   var lastname2 = formvalue3.controls.lname3.value;
  //   var phonenumber2 = formvalue3.controls.phno3.value;
  //   var emailaddress2 = formvalue3.controls.email3.value;
  //   console.warn(firstname2);
  //   console.warn(lastname2);
  //   console.warn(phonenumber2);
  //   console.warn(emailaddress2);
  //   console.warn(formvalue3);
  // }



  /*=====================================================================================
                          Template Drive Form With Validators 2
  =====================================================================================*/
  // function4(formvalue4: any) {
  //   var firstname3 = formvalue4.controls.fname4.value;
  //   var lastname3 = formvalue4.controls.lname4.value;
  //   var phonenumber3 = formvalue4.controls.phno4.value;
  //   var emailaddress3 = formvalue4.controls.email4.value;
  //   console.warn(firstname3);
  //   console.warn(lastname3);
  //   console.warn(phonenumber3);
  //   console.warn(emailaddress3);
  //   console.warn(formvalue4);
  // }

  /*=====================================================================================
                          Template Drive Form With Validators 3
  =====================================================================================*/
  // function5(formvalue5: any) {
  //   var firstname4 = formvalue5.controls.fname5.value;
  //   var lastname4 = formvalue5.controls.lname5.value;
  //   var phonenumber4 = formvalue5.controls.phno5.value;
  //   var emailaddress4 = formvalue5.controls.email5.value;
  //   console.warn(firstname4);
  //   console.warn(lastname4);
  //   console.warn(phonenumber4);
  //   console.warn(emailaddress4);
  //   console.warn(formvalue4);
  // }


  /* ======================================================================================================
                                  Nasted Form Array With Reactive Form 1 (Model Driven Form)
    ====================================================================================================== */
  // submitevent1() {
  //   console.warn(this.nform1.get('contactno1').value);
  //   console.warn(this.nform1.value);
  // }
  // addcontrols1() {
  //   this.nform1.get('contactno1').push(new FormControl());
  // }
  value = 'Clear me';
}