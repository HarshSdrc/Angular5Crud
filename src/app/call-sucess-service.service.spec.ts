import { TestBed, inject } from '@angular/core/testing';

import { CallSucessServiceService } from './call-sucess-service.service';

describe('CallSucessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallSucessServiceService]
    });
  });

  it('should be created', inject([CallSucessServiceService], (service: CallSucessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
