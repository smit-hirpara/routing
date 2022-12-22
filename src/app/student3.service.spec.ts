import { TestBed } from '@angular/core/testing';

import { Student3Service } from './student3.service';

describe('Student3Service', () => {
  let service: Student3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Student3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
