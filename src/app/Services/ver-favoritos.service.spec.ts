import { TestBed } from '@angular/core/testing';

import { VerFavoritosService } from './ver-favoritos.service';

describe('VerFavoritosService', () => {
  let service: VerFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
