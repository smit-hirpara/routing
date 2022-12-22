import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loadingc2Component } from './loadingc2/loadingc2.component';



@NgModule({
  declarations: [
    Loadingc2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Loadingm2Module { 
  constructor() {
    console.warn("loading module 2 file load");
  }
}
