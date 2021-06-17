import { TestBed } from '@angular/core/testing';

import { ServicioExtrasService } from './servicio-extras.service';

describe('ServicioExtrasService', () => {
  let service: ServicioExtrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioExtrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
