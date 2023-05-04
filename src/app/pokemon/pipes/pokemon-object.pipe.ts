import { CardInfo } from './../../shared/interfaces/card-info.interface';
import { Pokemon, Stat } from './../interfaces/pokemon.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonObject'
})
export class PokemonObjectPipe implements PipeTransform {

  transform(value: Pokemon | null): CardInfo | null {

    if (!value) return value;

    console.log('------value:', value)

    const cardInfo: CardInfo = {
      id: value.id,
      name: value.name,
      topValue: value.stats.filter(
        (stat: Stat) => stat.stat.name === 'hp'
      )[0].base_stat,
      topText: value.stats.filter(
        (stat: Stat) => stat.stat.name === 'hp'
      )[0].stat.name,
      types: value.types.map(
        type => type.type.name
      ),
      image: value.sprites.other?.['official-artwork'].front_default || '/assets'
    }

    return cardInfo;
  }

}
