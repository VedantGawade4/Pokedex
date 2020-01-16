import { Component, OnInit, Input } from '@angular/core';
import {Location, JsonPipe} from '@angular/common';
import { IPokemon } from 'src/app/core/models/IPokemon';
import { ActivatedRoute } from '@angular/router';
import { DummyJson } from 'src/app/core/dummyJsons/pokemon';
import { Observable, of } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IEvolutionChain, IEvolutionDetail, IEvolvesTo } from 'src/app/core/models/IEvolutionChain';
import { PokemonEvoulutionChainService } from 'src/app/core/services/pokemon-evoulution-chain.service';
import { PokemonSpeciesService } from 'src/app/core/services/pokemon-species.service';
import { IPokemonSpecies } from 'src/app/core/models/IPokemonSpecies';
import { element } from 'protractor';

@Component({
  selector: 'app-pokemon-detail-card',
  templateUrl: './pokemon-detail-card.component.html',
  styleUrls: ['./pokemon-detail-card.component.css']
})
export class PokemonDetailCardComponent implements OnInit {

  private pokemon : Observable<IPokemon>;
  
  private pokemonEvolutionChainIds : Array<string> = new Array<string>();
  private pokemonEvolutionChainIdsO :  Observable<Array<string>>;

  constructor(private location : Location, private activatedRoute : ActivatedRoute, 
    private pokemonService : PokemonService, private pokemonSpeciesService : PokemonSpeciesService, 
    private pokemonEvolutionChainService : PokemonEvoulutionChainService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => { this.setPokemonCardData(paramMap.get("pokemonId")); }
    ); 
  }

  private setPokemonCardData(searchText : string) : boolean
  {
    return this.getPokemonDetails(searchText);
  }
  
  private getPokemonDetails(searchText : string): boolean
  {
    this.pokemonService.getPokemonById(+searchText).subscribe(
      (result : IPokemon) => { 
        this.pokemon = of(result);
        this.pokemonEvolutionChainIds = [];
        this.getPokemonSpeciesDetails(result.id.toString());
      }
    );

    return true;
  }

  private getPokemonSpeciesDetails(searchText : string) : boolean
  {
    this.pokemonSpeciesService.getPokemonSpeciesById(+searchText).subscribe(
      (result : IPokemonSpecies) => { 
        this.getPokemonEvolutionChain(result.evolution_chain.url);
      }
    );

    return true;
  }

  private getPokemonEvolutionChain(searchText : string) : boolean
  {
    this.pokemonEvolutionChainService.getPokemonEvolutionById(+this.getIdFromUrl(searchText)).subscribe(
      (result : IEvolutionChain) => {

        //get the ids from evolution chain
         this.getEvolutionIds(result);

         //get the Observable for evolution chain ids
         this.pokemonEvolutionChainIdsO = of(this.pokemonEvolutionChainIds);
         
        // alert(this.pokemonEvolutionChainIds);
      }
    );

    return true;
  }

  private getEvolutionIds(evolutionChain : IEvolutionChain)
  {
    this.pokemonEvolutionChainIds.push(this.getIdFromUrl(evolutionChain.chain.species.url));
    this.getEvolvesToId(evolutionChain.chain.evolves_to);
  }

  private getEvolvesToId(evolvesToList : Array<IEvolvesTo>) : void
  {
    if(evolvesToList === null || evolvesToList === undefined || evolvesToList.length === 0)
    return;

    evolvesToList.forEach(
      element=>{
        this.pokemonEvolutionChainIds.push(this.getIdFromUrl(element.species.url));
        this.getEvolvesToId(element.evolves_to);
      }
    );

    return;
  }

  getIdFromUrl(url : string) : string
  {
    let tokens = url.split("/");
    // alert(tokens);
    if(tokens.length < 2) return "No_Id_found";
    //alert(tokens[tokens.length-2]);
    return tokens[tokens.length-2];
  }

  onBack()
  {
    this.location.back();
  }
}
