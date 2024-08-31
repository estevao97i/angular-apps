import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlPokemonName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  pokemon: any;

  constructor(private activateRoute: ActivatedRoute, private service: PokeApiService) {}

  ngOnInit(): void {
    this.getPokemon;
  }
  
  get getPokemon() {
    const id = this.activateRoute.snapshot.params['id'];
    const pokemon = this.service.getPokemon(`${this.urlPokemon}/${Number(id)}`);
    const pokemonUrl = this.service.getPokemon(`${this.urlPokemonName}/${Number(id)}`);

    return forkJoin([pokemon, pokemonUrl]).subscribe(res => {
      this.pokemon = res
      console.log(this.pokemon)
    })
  }
}
