import { TestBed } from '@angular/core/testing';

import { ActivtieslistService } from './activtieslist.service';

describe('ActivtieslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivtieslistService = TestBed.get(ActivtieslistService);
    expect(service).toBeTruthy();
  });
});
