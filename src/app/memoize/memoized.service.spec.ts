import { TestBed } from '@angular/core/testing';

import { MemoizedService } from './memoized.service';

describe('MemoizedService', () => {
  let service: MemoizedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoizedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
