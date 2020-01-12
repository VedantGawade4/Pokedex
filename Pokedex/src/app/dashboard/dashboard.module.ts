import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { DashboardRouterModule } from './dashboard-router.module';
import { CommonModule } from '@angular/common';
import { PokemonCarouselModule } from '../pokemon-carousel/pokemon-carousel.module';
import { PokemonSearchModule } from '../pokemon-search/pokemon-search.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouterModule,
    PokemonCarouselModule,
    PokemonSearchModule,
    SharedModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
