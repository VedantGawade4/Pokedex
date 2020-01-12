import { PokemonAbilityNamePipe } from './pokemon-ability-name.pipe';

describe('PokemonAbilityNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonAbilityNamePipe();
    expect(pipe).toBeTruthy();
  });
});
