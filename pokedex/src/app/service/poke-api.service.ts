import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

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
}
