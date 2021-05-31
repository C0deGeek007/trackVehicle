import { TestBed } from '@angular/core/testing';

import { GetVehicleDataService } from './get-vehicle-data.service';

describe('GetVehicleDataService', () => {
  let service: GetVehicleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVehicleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
