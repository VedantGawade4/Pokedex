import { NgModule } from '@angular/core';
import { PokemonSearchComponent } from './pokemon-search.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [PokemonSearchComponent],
  imports: [
    CoreModule
  ],
  exports:[
    PokemonSearchComponent
  ]
})
export class PokemonSearchModule { }
