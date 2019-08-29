import { TestBed } from '@angular/core/testing';

import { SalesforceWebToLeadServiceService } from './salesforce-web-to-lead-service.service';

describe('SalesforceWebToLeadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesforceWebToLeadServiceService = TestBed.get(SalesforceWebToLeadServiceService);
    expect(service).toBeTruthy();
  });
});
