import { PokemonService } from './../../services/pokemon.service';
import { Pokemon } from './../../interfaces/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class PokemonCardComponent implements OnInit {

  @Input()
  public url: string = ''

  public flip: string = 'inactive';
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

    this.pokemonService.getPokemonByURL(this.url).subscribe(
      resp => {

        // just for showing the preloader
        setTimeout(() => {
          this.pokemonData = resp
        }, 500);

      }
    );

  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
