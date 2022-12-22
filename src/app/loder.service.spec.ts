import { TestBed } from '@angular/core/testing';

import { LoderService } from './loder.service';

describe('LoderService', () => {
  let service: LoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
