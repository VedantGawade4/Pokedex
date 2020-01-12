import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvolutionChain } from '../models/IEvolutionChain';


@Injectable({
  providedIn: 'root'
})
export class PokemonEvoulutionChainService {

  private pokemonEvolutionChainBaseUrl : string = "https://pokeapi.co/api/v2/evolution-chain/";

  constructor(private http : HttpClient) { }

  getPokemonEvolutionById(id : number) : Observable<IEvolutionChain>
  {
    return this.http.get<IEvolutionChain>(this.pokemonEvolutionChainBaseUrl + id);
  }
}
