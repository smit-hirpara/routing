import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoComponent } from './compo.component';

describe('CompoComponent', () => {
  let component: CompoComponent;
  let fixture: ComponentFixture<CompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
