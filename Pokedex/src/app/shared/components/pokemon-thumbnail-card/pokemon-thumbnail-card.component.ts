import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/core/models/IPokemon';

@Component({
  selector: 'app-pokemon-thumbnail-card',
  templateUrl: './pokemon-thumbnail-card.component.html',
  styleUrls: ['./pokemon-thumbnail-card.component.css']
})
export class PokemonThumbnailCardComponent implements OnInit {

  @Input() pokemon : IPokemon;
  
  constructor() { }

  ngOnInit() {
  }

}
