import { TestBed } from '@angular/core/testing';

import { AuihGuard } from './auih.guard';

describe('AuihGuard', () => {
  let guard: AuihGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuihGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
