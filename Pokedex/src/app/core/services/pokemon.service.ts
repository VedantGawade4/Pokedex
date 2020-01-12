import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IPokemon } from '../models/IPokemon';
import { DummyJson } from '../dummyJsons/pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonBaseUrl : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { }
  
    getPokemonById(id : number) : Observable<IPokemon>
    {
      return this.http.get<IPokemon>(this.pokemonBaseUrl + id);
    }

    getPokemonByName(name : string): Observable<IPokemon>
    {
      return this.http.get<IPokemon>(this.pokemonBaseUrl + name);
    }
}
