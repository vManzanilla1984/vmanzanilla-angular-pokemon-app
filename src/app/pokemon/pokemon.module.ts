import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonPageTitleComponent } from './components/pokemon-page-title/pokemon-page-title.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonListPageComponent,
    PokemonPageTitleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PokemonListPageComponent
  ]
})
export class PokemonModule { }
