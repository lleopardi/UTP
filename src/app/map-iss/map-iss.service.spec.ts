import { TestBed, inject } from '@angular/core/testing';

import { MapIssService } from './map-iss.service';

describe('MapIssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapIssService]
    });
  });

  it('should be created', inject([MapIssService], (service: MapIssService) => {
    expect(service).toBeTruthy();
  }));
});
