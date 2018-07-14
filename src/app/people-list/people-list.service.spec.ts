import { TestBed, inject } from '@angular/core/testing';

import { PeopleListService } from './people-list.service';

describe('PeopleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleListService]
    });
  });

  it('should be created', inject([PeopleListService], (service: PeopleListService) => {
    expect(service).toBeTruthy();
  }));
});
