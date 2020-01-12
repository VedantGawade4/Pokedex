import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/core/models/IPokemon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon : IPokemon;

  constructor(private router : Router, private route :ActivatedRoute) {}

  ngOnInit() {
  }

  onCardClick() : void
  {
    let id : string = this.route.snapshot.paramMap.get("pokemonId");
    this.router.navigate(["dashboard/" + id + "/details"]);
  }
}
