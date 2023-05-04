import { PokemonList } from './../interfaces/pokemonList.interface';
import { Pokemon } from './../interfaces/pokemon.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  private get<T>(url: string): Observable<T> {

    const resp = this.http.get<T>(url)
      .pipe(
        catchError(
          error => of(error)
        )
      );

    return resp;

  }

  getAll(): Observable<PokemonList> {

    return this.get<PokemonList>(`${this.url}/pokemon?limit=100&amp;offset=200`)
      .pipe(
        tap(

        ),
        tap(
          () => {

          }
        )
      )

  }

}
