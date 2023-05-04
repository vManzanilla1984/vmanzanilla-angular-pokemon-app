import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from './../../interfaces/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  public url: string = ''

  public isLoading: boolean = false;
  public pokemonData: Pokemon | null = null

  constructor(private pokemonService: PokemonService) {



  }

  ngOnInit(): void {
    this.getPokemonInfo()
  }

  getPokemonInfo(): void {

    if (!this.url) {
      return
    }

    this.isLoading = true

    this.pokemonService.getPokemonByURL(this.url).subscribe(
      resp => {
        this.pokemonData = resp
      }
    );

  }

}
