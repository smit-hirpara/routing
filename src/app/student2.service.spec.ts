import { TestBed } from '@angular/core/testing';

import { Student2Service } from './student2.service';

describe('Student2Service', () => {
  let service: Student2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Student2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
