import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service : PokemonService;
  let mockHttp ;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    service = new PokemonService(mockHttp);
  });

  // it('should be created', () => {
  //   const service: PokemonService = TestBed.get(PokemonService);
  //   expect(service).toBeTruthy();
  // });

  it('should be called with correct url ', ()=>{
    service.getPokemonById(101);

    expect(mockHttp.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/101');
  });
});
