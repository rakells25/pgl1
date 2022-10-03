import { TestBed } from '@angular/core/testing';

import { MalabaresService } from './malabares.service';

describe('MalabaresService', () => {
  let service: MalabaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalabaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
