import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PokemonCarouselModule } from '../pokemon-carousel/pokemon-carousel.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PokemonCarouselModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
