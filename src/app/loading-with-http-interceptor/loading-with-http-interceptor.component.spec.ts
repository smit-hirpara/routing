import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingWithHttpInterceptorComponent } from './loading-with-http-interceptor.component';

describe('LoadingWithHttpInterceptorComponent', () => {
  let component: LoadingWithHttpInterceptorComponent;
  let fixture: ComponentFixture<LoadingWithHttpInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingWithHttpInterceptorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingWithHttpInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
