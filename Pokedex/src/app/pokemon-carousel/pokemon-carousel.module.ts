import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardCarouselComponent } from './components/pokemon-card-carousel/pokemon-card-carousel.component';
import { CoreModule } from '../core/core.module';
import { PokemonDetailCardComponent } from './components/pokemon-detail-card/pokemon-detail-card.component';
import { PokemonCarouselRouterModule } from './pokemon-carousel-router.module';
import { PokemonAbilityNamePipe } from './pipes/PokemonAbilityNamePipe/pokemon-ability-name.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonCardComponent, PokemonCardCarouselComponent, PokemonDetailCardComponent, PokemonAbilityNamePipe],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    PokemonCarouselRouterModule,
    PokemonCardCarouselComponent
  ]
})
export class PokemonCarouselModule { }
