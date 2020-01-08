import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPokemon } from '../models/IPokemon';
import { DummyJson } from '../dummyJsons/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  
    getPokemonById(id : number) : Observable<IPokemon>
    {
      return DummyJson.getPokemonById(id);
    }

    getPokemonByName(name : string): Observable<IPokemon>
    {
      return DummyJson.getPokemonByName(name);
    }
}
