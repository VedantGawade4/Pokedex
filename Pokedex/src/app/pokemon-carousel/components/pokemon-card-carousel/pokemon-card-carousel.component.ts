import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DummyJson } from 'src/app/core/dummyJsons/pokemon';
import { IPokemon } from 'src/app/core/models/IPokemon';

@Component({
  selector: 'app-pokemon-card-carousel',
  templateUrl: './pokemon-card-carousel.component.html',
  styleUrls: ['./pokemon-card-carousel.component.css']
})
export class PokemonCardCarouselComponent implements OnInit,OnChanges {
  
  @Input() pokemonSearchText : string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setPokemonCardData(changes.pokemonSearchText.currentValue);
  }

  private setPokemonCardData(searchText : string) : boolean
  {
    DummyJson.getPokemonById(+searchText).subscribe(
      (result : IPokemon)=>{ alert(result.name) }
    );
    return true;
  }
}
