import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import { PokemonCardCarouselComponent } from '../pokemon-carousel/components/pokemon-card-carousel/pokemon-card-carousel.component';
import { SharedModule } from '../shared/shared.module';

const routes : Route[] = [
  {
    path:"dashboard",
    redirectTo:"dashboard/1",
    pathMatch:"full"
  },
  {
    path:"",
    redirectTo:"dashboard/1",
    pathMatch:"full"
  },
  { 
    path: 'dashboard/:pokemonId', 
    component: PokemonCardCarouselComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DashboardRouterModule {
 }
