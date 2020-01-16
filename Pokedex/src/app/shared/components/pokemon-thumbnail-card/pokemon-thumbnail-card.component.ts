import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/core/models/IPokemon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-thumbnail-card',
  templateUrl: './pokemon-thumbnail-card.component.html',
  styleUrls: ['./pokemon-thumbnail-card.component.css']
})
export class PokemonThumbnailCardComponent implements OnInit {

  @Input() pokemon : IPokemon;
  
  constructor(private router : Router, private route :ActivatedRoute) {}

  ngOnInit() {
  }

  onCardClick() : void
  {
    let id : string = this.route.snapshot.paramMap.get("pokemonId");
    this.router.navigate(["dashboard/" + this.pokemon.id + "/details"]);
  }

}
