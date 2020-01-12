import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonSpecies } from '../models/IPokemonSpecies';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  private pokemonSpeciesBaseUrl : string = "https://pokeapi.co/api/v2/pokemon-species/";

  constructor(private http : HttpClient) { }

  getPokemonSpeciesById(id : number) : Observable<IPokemonSpecies>
  {
    return this.http.get<IPokemonSpecies>(this.pokemonSpeciesBaseUrl + id);
  }
}
