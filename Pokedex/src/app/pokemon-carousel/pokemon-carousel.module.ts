import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardCarouselComponent } from './components/pokemon-card-carousel/pokemon-card-carousel.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PokemonCardComponent, PokemonCardCarouselComponent],
  imports: [
    CoreModule
  ],
  exports: [
    PokemonCardCarouselComponent
  ]
})
export class PokemonCarouselModule { }
