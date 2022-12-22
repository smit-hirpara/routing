import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loadingc1Component } from './loadingc1/loadingc1.component';



@NgModule({
  declarations: [
    Loadingc1Component
  ],
  imports: [
    CommonModule
  ]
})
export class Loadingm1Module { 
  constructor() {
    console.warn("loading module 1 file load");
  }
}
