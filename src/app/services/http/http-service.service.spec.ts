import { TestBed } from '@angular/core/testing';

import { ScHttpService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: ScHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
