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
  @Input() sort : boolean = true;

  evolutionChainPokemons : Array<IPokemon> = new Array<IPokemon>();
  evolutionChainPokemonsO : Observable<Array<IPokemon>>;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.pokemonEvoulutionChainIds.currentValue !== null && changes.pokemonEvoulutionChainIds.currentValue !== undefined)
    {
      this.evolutionChainPokemons = [];
      this.evolutionChainPokemonsO = of(this.evolutionChainPokemons);

      this.pokemonEvoulutionChainIds.forEach(element => {
        this.pokemonService.getPokemonById(+element).subscribe(
          (result : IPokemon) => {
            this.insertPokemonSorted(result);
            this.evolutionChainPokemonsO = of(this.evolutionChainPokemons);
          }
        );
      });
    }
  }

  insertPokemonSorted(pokemon : IPokemon) : void
  {
    if(this.sort)
    {
      for (let index = 0; index < this.evolutionChainPokemons.length; index++) 
      {
        if(pokemon.base_experience < this.evolutionChainPokemons[index].base_experience)
        {
          let prefix = this.evolutionChainPokemons.slice(0,index);
          let suffix = this.evolutionChainPokemons.slice(index, this.evolutionChainPokemons.length);
          prefix.push(pokemon);
          this.evolutionChainPokemons = prefix.concat(suffix);
          return;
        }
      }
      this.evolutionChainPokemons.push(pokemon);
    }
    else
    {
      this.evolutionChainPokemons.push(pokemon);
    }
    return;
  }
}
