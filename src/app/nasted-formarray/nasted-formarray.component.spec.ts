import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastedFormarrayComponent } from './nasted-formarray.component';

describe('NastedFormarrayComponent', () => {
  let component: NastedFormarrayComponent;
  let fixture: ComponentFixture<NastedFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NastedFormarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NastedFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
