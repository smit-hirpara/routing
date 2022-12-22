import { TestBed } from '@angular/core/testing';

import { Student4Service } from './student4.service';

describe('Student4Service', () => {
  let service: Student4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Student4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
