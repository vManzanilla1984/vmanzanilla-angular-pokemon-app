import { PokemonList } from './../../interfaces/pokemonList.interface';
import { Pokemon } from './../../interfaces/pokemon.interface';
import { PokemonService } from './../../services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent {

  public isLoading: boolean = false;
  public pokemonList: PokemonList = {
    count: 0,
    next: '',
    previous: null,
    results: []
  }

  constructor(private pokemonService: PokemonService) {

    this.getPokemonList()

  }

  getPokemonList(): void {

    console.log('-----getPokemonList')
    this.isLoading = true

    this.pokemonService.getAll().subscribe(
      resp => {
        console.log('-----pokemons:', resp)
        this.pokemonList = resp
        this.isLoading = false
      }
    );

  }

}
