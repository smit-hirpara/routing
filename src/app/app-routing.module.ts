import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { LoadingCompoComponent } from './loading-compo/loading-compo.component';
import { CompoComponent } from './module/compo/compo.component';
import { NastedFormarrayComponent } from './nasted-formarray/nasted-formarray.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RadioBtnCheckboxComponent } from './radio-btn-checkbox/radio-btn-checkbox.component';
import { TdformsComponent } from './tdforms/tdforms.component';
// import { PreloadAllModules } from '@angular/router'

/*==================================================================================================
                                                 Routing
==================================================================================================*/
const routes: Routes = [{
  path:'', redirectTo:'componetn2', pathMatch:'full' //redirecting route
},
{
  path:'component1', component:Component1Component
},
{
  path:'componetn2' , component:Component2Component
},
{
  path:'component3' , component:Component3Component
},
{
  path:'component4' , component:Component4Component
},
{
  path:'component5' , component:NastedFormarrayComponent
},
{
  path:'component6' , component:RadioBtnCheckboxComponent
},
{
  path:"component7" , component:CompoComponent
},
{
  path:"component8" , component:TdformsComponent
},
{
  path:"loadingcompo", component:LoadingCompoComponent
},
{
  path:"httpclientcompo", component:HttpclientComponent
},
{
  path:'**', component:PagenotfoundComponent
}
];    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
