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
      tap(res => res.results.map((resPokemons: any) => {
        this.http.get<any>(resPokemons.url).pipe(
          map(res => res)
        ).subscribe(res => resPokemons.status = res)
      })
    ))
  }

  getSearchPokemon(): Observable<string> {
    return this.searchPokemon.asObservable();
  }

  setSearchPokemon(name: string): void {
    this.searchPokemon.next(name);
  }
}
