import { TestBed } from '@angular/core/testing';

import { BikezService } from './bikez.service';

describe('BikezService', () => {
  let service: BikezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
