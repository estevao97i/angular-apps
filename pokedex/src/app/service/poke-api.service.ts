import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  searchPokemon = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`).
    pipe(
      tap(res => res),
      tap(res => res.results.map((resPokemons: any) => {
        this.getPokemon(resPokemons.url)
        .subscribe(res => resPokemons.status = res)
      })
    ))
  }

  getPokemon(pokemonApi: any): Observable<any> {
    return this.http.get<any>(pokemonApi).pipe(
      map(res => res)
    )
  }

  getSearchPokemon(): Observable<string> {
    return this.searchPokemon.asObservable();
  }

  setSearchPokemon(name: string): void {
    this.searchPokemon.next(name);
  }
}
