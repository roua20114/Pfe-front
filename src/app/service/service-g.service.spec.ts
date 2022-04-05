import { TestBed } from '@angular/core/testing';

import { ServiceGService } from './service-g.service';

describe('ServiceGService', () => {
  let service: ServiceGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
