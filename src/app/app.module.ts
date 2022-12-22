import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ModuleModule } from './module/module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Component4Component } from './component4/component4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NastedFormarrayComponent } from './nasted-formarray/nasted-formarray.component';
import { RadioBtnCheckboxComponent } from './radio-btn-checkbox/radio-btn-checkbox.component';
import { TdformsComponent } from './tdforms/tdforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';``
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router'
import { Loadingm1Module } from './loadingm1/loadingm1.module';
import { Loadingm2Module } from './loadingm2/loadingm2.module';
import { StudentService } from './student.service';
import { Student2Service } from './student2.service';
import { Student3Service } from './student3.service';
import { Student5Service } from './student5.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata1';
import { TestData2 } from './testdata2';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingWithHttpInterceptorComponent } from './loading-with-http-interceptor/loading-with-http-interceptor.component';
import { LoaderIntercepotor } from './loader-intercepotor';
import { LoadingCompoComponent } from './loading-compo/loading-compo.component';
import { HttpclientComponent } from './httpclient/httpclient.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    PagenotfoundComponent,
    Component4Component,
    NastedFormarrayComponent,
    RadioBtnCheckboxComponent,
    TdformsComponent,
    LoadingWithHttpInterceptorComponent,
    LoadingCompoComponent,
    HttpclientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressBarModule,
    Loadingm1Module,
    Loadingm2Module,
    HttpClientModule,
    LoadingBarRouterModule,
    InMemoryWebApiModule.forRoot(TestData),
    InMemoryWebApiModule.forRoot(TestData2),
    
  ],
  providers: [
    StudentService,
    Student2Service,
    Student3Service,
    Student5Service,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderIntercepotor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
