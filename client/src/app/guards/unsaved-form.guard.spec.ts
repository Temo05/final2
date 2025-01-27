import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unsavedFormGuard } from './unsaved-form.guard';

describe('unsavedFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unsavedFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
