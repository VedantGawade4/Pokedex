import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IPokemon } from 'src/app/core/models/IPokemon';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-thumbnail-collection',
  templateUrl: './pokemon-thumbnail-collection.component.html',
  styleUrls: ['./pokemon-thumbnail-collection.component.css']
})
export class PokemonThumbnailCollectionComponent implements OnInit, OnChanges {

  @Input() pokemonEvoulutionChainIds : Array<string>;

  evolutionChainPokemons : Array<IPokemon> = new Array<IPokemon>();
  evolutionChainPokemonsO : Observable<Array<IPokemon>>;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.pokemonEvoulutionChainIds.currentValue !== null && changes.pokemonEvoulutionChainIds.currentValue !== undefined)
    {
      this.pokemonEvoulutionChainIds.forEach(element => {
        this.pokemonService.getPokemonById(+element).subscribe(
          (result : IPokemon) => {
            this.evolutionChainPokemons.push(result);
            this.evolutionChainPokemonsO = of(this.evolutionChainPokemons);
          }
        );
      });
    }
  }

}
