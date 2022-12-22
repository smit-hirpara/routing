import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validator} from '@angular/forms';

@Component({
  selector: 'app-nasted-formarray',
  templateUrl: './nasted-formarray.component.html',
  styleUrls: ['./nasted-formarray.component.scss']
})
export class NastedFormarrayComponent implements OnInit {
  
  // forname1: FormGroup;
  // TotalRow: number;

  // FormGroup: FormGroup;
  form1:any;
  form2:any;
  constructor(private _fd: FormBuilder) { }
  // form1
  ngOnInit(): void {
    // add new row daynamically
    // this.forname1 = this._fd.group({
    //   itemRows: this._fd.array([this.initItemRow()]),
    // });



    // form1
    this.form1= new FormGroup({
      contactnos: new FormArray([
        new FormControl('1234567890'),
        new FormControl('9087654321'),
      ]),
    });

    // form2
    this.form2=new FormGroup({
      contactnos2: new FormArray([
        new FormControl("9876504321"),
        new FormControl('5934578297'),
      ]),
    });
  };

  // add new row daynamically
  initItemRow() {
    return this._fd.group({
      Name:[''],
      RollNo:[''],
      Class:[''],
      MobileNo:['']
    });
  }

  // add new row daynamically
  // addNewRow() {
  //   const control = <FormArray>this.forname1.controls['itemRows'];
  //   control.push(this.initItemRow());
  // }
  // deleatrow(index: number) {
  //   const control = <FormArray>this.forname1.controls['itemRows'];
  //   if (control != null) {
  //     this.TotalRow = control.value.lenght;
  //   }
  //   if (this.TotalRow > 1) {
  //     control.removeAt(index);
  //   }
  //   else {
  //     alert("One record is mandatory");
  //     return false;
  //   }
  // }






  // form1
  addcontactno() {
    this.form1.get('contactnos').push(new FormControl());
  }
  submit1() {
    console.warn(this.form1.get('contactnos').value);
    console.warn(this.form1.value);
  }
  setpreset() {
    this.form1.get('contactnos').patchValue(['5432167890','6789054321']);
  }


  // form2 
  addcontactno2() {
    this.form2.get('contactnos2').push(new FormControl());
  }
  submit2() {
    console.warn(this.form2.get('contactnos2').value);
    console.warn(this.form2.value);
  }
  setpresent2() {
    this.form2.get('contactnos2').patchValue(['3437063024','9865781353']);
  }

}
