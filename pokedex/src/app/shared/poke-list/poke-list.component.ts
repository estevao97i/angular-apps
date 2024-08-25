import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit, AfterViewInit{

  pokemons: any = [];
  pokemonsDb: any = [];

  constructor(private service: PokeApiService) {}

  ngOnInit(): void {
    this.getAllPokemon();
  }
  
  ngAfterViewInit(): void {
    this.searchByName();
  }
  
  getAllPokemon() {
    this.service.getAllPokemon().subscribe({
      next: (value: any) => {
        this.pokemons = value.results
        this.pokemonsDb = this.pokemons;
        console.log(this.pokemons);
      }
    })
  }

  searchByName() {
    this.service.getSearchPokemon().subscribe(res => {
      if (!res.trim()) {
        this.pokemons = [...this.pokemonsDb]
        return
      }
      const newList = this.pokemonsDb.filter((_: any, i: number) => _.name.startsWith(res))
      this.pokemons = [...newList]
    })
  }
}
