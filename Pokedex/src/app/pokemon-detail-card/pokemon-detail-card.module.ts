import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailCardComponent } from './pokemon-detail-card.component';



@NgModule({
  declarations: [PokemonDetailCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonDetailCardComponent
  ]
})
export class PokemonDetailCardModule { }
