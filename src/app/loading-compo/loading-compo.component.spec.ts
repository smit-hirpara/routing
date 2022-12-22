import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCompoComponent } from './loading-compo.component';

describe('LoadingCompoComponent', () => {
  let component: LoadingCompoComponent;
  let fixture: ComponentFixture<LoadingCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
