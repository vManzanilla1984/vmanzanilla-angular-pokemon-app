import { Stat } from './../../pokemon/interfaces/pokemon.interface';

export interface CardInfo {
  abilities: string[]
  id: number,
  image: string
  name: string,
  stats: Stat[],
  topText: string,
  topValue: number,
  types: string[],
}
