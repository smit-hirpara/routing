import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-radio-btn-checkbox',
  templateUrl: './radio-btn-checkbox.component.html',
  styleUrls: ['./radio-btn-checkbox.component.scss'],
})
export class RadioBtnCheckboxComponent implements OnInit {
uname1: any;

  constructor() { }

  user = new user();

  submitfunction(form:NgForm) {
    if(form.invalid) {
      return
    }
    console.warn("user name"+form.controls['uname1'].value);
    console.warn("gender"+form.controls['gender'].value);
    console.warn("married"+form.controls['married'].value);
    console.warn(" t & c"+form.controls['tc'].value);
  }

  resetform(form:NgForm) {
    this.user=new user();
    form.resetForm({
      married:false
    });
  }

  setdefault() {
    this.user.username1="meet";
    this.user.gender1="male";
    this.user.isMarried=false;
    this.user.isTCAccepted=true;
  }


  ngOnInit(): void {
  }

}
