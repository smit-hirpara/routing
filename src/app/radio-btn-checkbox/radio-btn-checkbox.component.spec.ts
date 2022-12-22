import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnCheckboxComponent } from './radio-btn-checkbox.component';

describe('RadioBtnCheckboxComponent', () => {
  let component: RadioBtnCheckboxComponent;
  let fixture: ComponentFixture<RadioBtnCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioBtnCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBtnCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
