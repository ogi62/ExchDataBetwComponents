import { TestBed } from '@angular/core/testing';

import { SubmenuServicesService } from './submenu-services.service';

describe('SubmenuServicesService', () => {
  let service: SubmenuServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmenuServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
