import { TestBed } from '@angular/core/testing';

import { Student5Service } from './student5.service';

describe('Student5Service', () => {
  let service: Student5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Student5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
