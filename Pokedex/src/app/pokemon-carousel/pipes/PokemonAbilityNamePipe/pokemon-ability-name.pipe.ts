import { Pipe, PipeTransform } from '@angular/core';
import { IAbility } from 'src/app/core/models/IPokemon';

@Pipe({
  name: 'pokemonAbilityName'
})
export class PokemonAbilityNamePipe implements PipeTransform {

  transform(pokemonAbilities : IAbility[]): string {
    if(pokemonAbilities === null || pokemonAbilities === undefined)return "";
    
    let ablities : string = "";
    for(let pokemonAbility of pokemonAbilities)
    {
      ablities += pokemonAbility.ability.name + ", ";
    }
    return ablities;
  }

}
