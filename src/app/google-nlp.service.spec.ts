import { TestBed } from '@angular/core/testing';

import { GoogleNlpService } from './google-nlp.service';

describe('GoogleNlpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleNlpService = TestBed.get(GoogleNlpService);
    expect(service).toBeTruthy();
  });
});
