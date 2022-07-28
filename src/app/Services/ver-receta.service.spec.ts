import { TestBed } from '@angular/core/testing';

import { VerRecetaService } from './ver-receta.service';

describe('VerRecetaService', () => {
  let service: VerRecetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerRecetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
