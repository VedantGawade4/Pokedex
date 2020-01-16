import { Component, OnInit } from '@angular/core';
import { DummyJson } from 'src/app/core/dummyJsons/pokemon';
import { IPokemon } from 'src/app/core/models/IPokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-pokemon-card-carousel',
  templateUrl: './pokemon-card-carousel.component.html',
  styleUrls: ['./pokemon-card-carousel.component.css']
})
export class PokemonCardCarouselComponent implements OnInit {
  
  currentPokemon : Observable<IPokemon>;
  currentPokemonId : string;
  pokemonIdToFind : string;

  constructor(private localStorageService : LocalStorageService ,private router : Router, private route: ActivatedRoute, private pokemonService : PokemonService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonIdToFind = params['pokemonId'];
      this.setPokemonCardData(this.pokemonIdToFind);
   });
  }

  private setPokemonCardData(searchText : string) : boolean
  {
    this.pokemonService.getPokemonById(+searchText).subscribe(
      (result : IPokemon)=>{ 
          this.currentPokemon = of(result);
          this.currentPokemonId = result.id.toString();
          this.localStorageService.addRecentSearch(+searchText);
          
        }
    );
    return true;
  }

  private onPrevious() : void
  {
    let prevId = +this.currentPokemonId - 1;
    this.router.navigate(["dashboard/" + prevId]);
  }

  private onNext() : void
  {
    let nextId = +this.currentPokemonId + 1;
    this.router.navigate(["dashboard/" + nextId]);
  }
}
