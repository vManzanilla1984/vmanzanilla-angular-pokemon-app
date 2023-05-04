import { PokemonList } from './../../interfaces/pokemonList.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Input()
  public pokemonList: PokemonList = {
    count: 0,
    next: '',
    previous: null,
    results: []
  }

}
