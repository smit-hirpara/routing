import { Component, OnInit } from '@angular/core';
import { LoderService } from '../loder.service';
import { Student2Service } from '../student2.service';

@Component({
  selector: 'app-loading-compo',
  templateUrl: './loading-compo.component.html',
  styleUrls: ['./loading-compo.component.scss']
})
export class LoadingCompoComponent implements OnInit {

  constructor(private service:Student2Service) { }

  ngOnInit(): void {
    this.detstudentdetai2();
  }

  studentsresult!:any;
  detstudentdetai2() {
    this.service.getbooksformstroe2().subscribe((res: any) => {
      this.studentsresult = res;
    });
  }

}
