import { PokemonList } from './../../interfaces/pokemonList.interface';
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

    this.isLoading = true

    this.pokemonService.getAll().subscribe(
      resp => {
        this.pokemonList = resp

        // just for showing the preloader
        setTimeout(() => {
          this.isLoading = false
        }, 500);


      }
    );

  }

}
