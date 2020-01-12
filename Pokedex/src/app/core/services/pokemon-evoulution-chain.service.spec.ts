import { TestBed } from '@angular/core/testing';

import { PokemonEvoulutionChainService } from './pokemon-evoulution-chain.service';

describe('PokemonEvoulutionChainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonEvoulutionChainService = TestBed.get(PokemonEvoulutionChainService);
    expect(service).toBeTruthy();
  });
});
