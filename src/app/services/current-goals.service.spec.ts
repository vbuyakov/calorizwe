import { TestBed } from '@angular/core/testing';

import { CurrentGoalsService } from './current-goals.service';

describe('CurrentGoalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentGoalsService = TestBed.get(CurrentGoalsService);
    expect(service).toBeTruthy();
  });
});
