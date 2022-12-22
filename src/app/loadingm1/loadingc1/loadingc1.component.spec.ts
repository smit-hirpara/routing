import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadingc1Component } from './loadingc1.component';

describe('Loadingc1Component', () => {
  let component: Loadingc1Component;
  let fixture: ComponentFixture<Loadingc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loadingc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadingc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
