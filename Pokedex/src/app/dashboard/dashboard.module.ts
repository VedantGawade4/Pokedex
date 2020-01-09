import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PokemonCarouselModule } from '../pokemon-carousel/pokemon-carousel.module';
import { PokemonDetailCardModule } from '../pokemon-detail-card/pokemon-detail-card.module';
import { PokemonSearchModule } from '../pokemon-search/pokemon-search.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PokemonCarouselModule,
    PokemonDetailCardModule,
    PokemonSearchModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
