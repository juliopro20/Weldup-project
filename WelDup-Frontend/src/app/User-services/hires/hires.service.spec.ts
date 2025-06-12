import { TestBed } from '@angular/core/testing';

import { HiresService } from './hires.service';

describe('HiresService', () => {
  let service: HiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
