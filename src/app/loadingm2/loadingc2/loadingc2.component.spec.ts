import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadingc2Component } from './loadingc2.component';

describe('Loadingc2Component', () => {
  let component: Loadingc2Component;
  let fixture: ComponentFixture<Loadingc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loadingc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadingc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
