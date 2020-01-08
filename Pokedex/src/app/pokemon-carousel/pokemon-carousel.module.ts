import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardCarouselComponent } from './components/pokemon-card-carousel/pokemon-card-carousel.component';

@NgModule({
  declarations: [PokemonCardComponent, PokemonCardCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonCardCarouselComponent
  ]
})
export class PokemonCarouselModule { }
