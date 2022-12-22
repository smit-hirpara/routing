import { Component, OnInit } from '@angular/core';
import { LoderService } from '../loder.service';

@Component({
  selector: 'app-loading-with-http-interceptor',
  templateUrl: './loading-with-http-interceptor.component.html',
  styleUrls: ['./loading-with-http-interceptor.component.scss']
})
export class LoadingWithHttpInterceptorComponent implements OnInit {

  loader:any;
  constructor(private loaderservice:LoderService) { 
    this.loaderservice.loader.subscribe(res => {
      this.loader =res;
    })
  }

  ngOnInit(): void {
  }

}
