import { TestBed } from '@angular/core/testing';

import { PeliculasGuard } from './peliculas.guard';

describe('PeliculasGuard', () => {
  let guard: PeliculasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PeliculasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
