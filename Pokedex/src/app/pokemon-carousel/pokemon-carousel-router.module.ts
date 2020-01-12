import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PokemonDetailCardComponent } from './components/pokemon-detail-card/pokemon-detail-card.component';

const routes : Route[] = [
  {
    path: "dashboard/:pokemonId/details",
    component: PokemonDetailCardComponent
  },
  {
    path: ":pokemonId/details",
    component: PokemonDetailCardComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PokemonCarouselRouterModule { }
