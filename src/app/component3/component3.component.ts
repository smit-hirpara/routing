import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('click',['$event'])
  onhostclick(event:Event) {
    console.warn("host listener click");
  }
}
