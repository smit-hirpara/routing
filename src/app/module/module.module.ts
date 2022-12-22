import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoComponent } from './compo/compo.component';



@NgModule({
  declarations: [
    CompoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { 
  constructor() {
    console.warn("Module module loaded.")
  }
}
