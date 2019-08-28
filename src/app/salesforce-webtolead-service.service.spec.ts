import { TestBed } from '@angular/core/testing';

import { SalesforceWebtoleadServiceService } from './salesforce-webtolead-service.service';

describe('SalesforceWebtoleadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesforceWebtoleadServiceService = TestBed.get(SalesforceWebtoleadServiceService);
    expect(service).toBeTruthy();
  });
});
