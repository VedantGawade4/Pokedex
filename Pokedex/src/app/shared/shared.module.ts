import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonThumbnailCardComponent } from './components/pokemon-thumbnail-card/pokemon-thumbnail-card.component';
import { PokemonThumbnailCollectionComponent } from './components/pokemon-thumbnail-collection/pokemon-thumbnail-collection.component';

@NgModule({
  declarations: [PokemonThumbnailCardComponent, PokemonThumbnailCollectionComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonThumbnailCardComponent,
    PokemonThumbnailCollectionComponent
  ]
})
export class SharedModule { }
